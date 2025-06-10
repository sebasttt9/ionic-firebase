import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  // agrega más campos si quieres
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/character?page=${page}`);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`);
  }
}
