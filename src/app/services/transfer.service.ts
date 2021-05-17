import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TRANSFERS } from '../mock-data';
import {ITransfer} from '../ITransfer';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  getAll(): ITransfer[] {
    return TRANSFERS;
  }

  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  //
  // create(data): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  //
  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  //
  // delete(id): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  //
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  //
  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
