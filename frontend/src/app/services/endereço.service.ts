import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereço } from '../models/endereço.model';

const baseUrl = 'http://localhost:8080/api/endereços';

@Injectable({
  providedIn: 'root'
})
export class EndereçoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Endereço[]> {
    return this.http.get<Endereço[]>(baseUrl);
  }

  get(id: any): Observable<Endereço> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
