import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Toast } from '@capacitor/toast';
import { CommonModule } from '@angular/common';
import { Network } from '@capacitor/network';
import { NavController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';  // <-- Importa HttpClient

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  foto: string | undefined;
  isOnline: boolean = true;
  networkListener: any;

  nombreUsuario: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private nav: NavController,
    private cdr: ChangeDetectorRef,
    private http: HttpClient  // <-- Inyecta HttpClient aquí
  ) {}

  ngOnInit() {
    this.checkNetworkStatus();
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.isOnline = status.connected;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

  async checkNetworkStatus() {
    const status = await Network.getStatus();
    this.isOnline = status.connected;
  }

  async logout() {
    await this.authService.logout();
    alert('Cierre de sesión exitoso');
    this.router.navigate(['/login']);
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    this.foto = image.dataUrl;
    this.mostrarToast('¡Foto tomada exitosamente!');
  }

  async mostrarToast(mensaje: string) {
    await Toast.show({
      text: mensaje,
      duration: 'short'
    });
  }

  login() {
    this.nav.navigateRoot('/home'); 
  }

  async guardarNombre() {
    await Preferences.set({
      key: 'nombre',
      value: this.nombreUsuario,
    });
    this.mostrarToast('Nombre guardado');
  }

  async leerNombre() {
    const { value } = await Preferences.get({ key: 'nombre' });
    this.nombreUsuario = value || '';
    this.mostrarToast(`Nombre leído: ${this.nombreUsuario}`);
  }

  async borrarNombre() {
    await Preferences.remove({ key: 'nombre' });
    this.nombreUsuario = '';
    this.mostrarToast('Nombre borrado');
  }

  // NUEVO: función para cargar personajes de la API
  cargarPersonajes() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe({
      next: (data: any) => {
        console.log('Personajes cargados:', data.results);
        this.mostrarToast(`Cargados ${data.results.length} personajes. Revisa la consola.`);
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
        this.mostrarToast('Error al cargar personajes');
      }
    });
  }
}
