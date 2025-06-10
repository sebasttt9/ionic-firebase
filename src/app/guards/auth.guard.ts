import { Injectable } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // Usuario autenticado → permite acceso
      } else {
        router.navigate(['/login']); // No autenticado → redirige
        resolve(false);
      }
    });
  });
};
