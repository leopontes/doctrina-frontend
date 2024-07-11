import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private httpClient: HttpClient) {
    let token = {};

    if(localStorage.getItem('token')){
      token = JSON.parse(localStorage.getItem('token') as any)
    }

    this.currentUserSubject = new BehaviorSubject<any>(token);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  getToken() : string | null {
    return localStorage.getItem('token');
  }

  isAutenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? this.isTokenValid(token) : false;
  }

  isTokenValid(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const expirationDate = decoded.exp *1000;
      return expirationDate > Date.now();
    } catch (error) {
      console.log('Token invalido!', error);
      return false;
    }
  }

  getCurrentUserValue(): any {
    let user = '';

    if(this.currentUserSubject.value.token){
      const token: any = jwtDecode(this.currentUserSubject.value.token);

      if(token){
        return {nome: token.nome, foto: token.foto};
      }
    }

    return user;
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`/api/v1/auth/login`, {username, password})
        .pipe(map(token =>{

          if(token){
            localStorage.setItem('token', JSON.stringify(token));
            this.currentUserSubject.next(token);
          }

          return token;

        }));
  }

  refresh(){
    
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
