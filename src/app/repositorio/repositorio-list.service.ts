import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositorio } from './modelos/repositorio.model';

@Injectable({
  providedIn: 'root',
})
export class RepositorioListService {
  private apiUrl: string = environment.baseUrl + '/repositories.json';

  constructor(private http: HttpClient) {}

  getRepositorios(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(this.apiUrl);
  }
}
