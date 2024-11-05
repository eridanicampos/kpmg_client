import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44364/api/Usuario';

  constructor(private http: HttpClient) { }

  // Função de login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { email, password });
  }

  // Função de registro
  register(nome: string, email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, { nome, email, senha });
  }
}
