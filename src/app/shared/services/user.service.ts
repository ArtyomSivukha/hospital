import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../helpers/app.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${appConfig.baseUrl}/user`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.patch(`${appConfig.baseUrl}/user`, user);
  }

  removeUser(userId: number): Observable<any> {
    return this.http.delete(`${appConfig.baseUrl}/user`, {params: {id: userId}});
  }

  takeDoctorRole(userId: number): Observable<any> {
    return this.http.patch(`${appConfig.baseUrl}/user/grantDoctor/${userId}`, {});
  }
}
