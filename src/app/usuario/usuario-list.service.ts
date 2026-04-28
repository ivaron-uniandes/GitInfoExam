import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './modelos/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioListService {
  private apiUrl: string = environment.baseUrl + '/users.json';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
