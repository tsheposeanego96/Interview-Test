import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:4201/heroes";
  constructor(private http: HttpClient) { }
  getContacts(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}`).toPromise();
  }
}
