import { Injectable } from '@angular/core';
import { Home } from './mock/home';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost/JL-Portfolio-Angular/Symfony-API/public';

  constructor(private http: HttpClient) { }

  getHomes(): Observable<Home[]> {
    /*convertir cette methode pour utiller HttpClient
    return of(POSTS);*/
    return this.http.get<Home[]>(this.url+"/api/home", {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}