import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:4201/api/heroes";
  constructor(private http: HttpClient) { }
  getContacts(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}`).toPromise();
  }
  evolveHero(heroAction): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}orders`, heroAction).toPromise();
  }
}
