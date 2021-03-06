import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/api/v1/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createUsuario(usuario:Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }
  updateUsuario(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteUsuario(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType:'text'});
  }
}
