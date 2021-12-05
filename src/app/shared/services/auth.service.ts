import { appConfig } from './../helpers/app.config';
import { UserCredentials, NewUser } from './../helpers/sign/interfaces';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(credentials: UserCredentials): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/account/login`, credentials);
  }

  signUp(newUser: NewUser): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/account/register`, newUser);
  }

  getUser(): Observable<any>  {
    return this.http.get(`${appConfig.baseUrl}/user/current`);
  }
}
