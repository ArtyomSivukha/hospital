import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from '../helpers/app.config';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  constructor(private http: HttpClient) {}

  getInstitution(): Observable<any> {
    return this.http.get(`${appConfig.baseUrl}/institution/`);
  }

  createInstitution(institution: any): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/institution/`, institution);
  }

  assignInstitution(docId: string, instId: string): Observable<any> {
    return this.http.post(
      `${appConfig.baseUrl}/institution/assign`,
      {},
      { params: { doctorId: docId, institutionId: instId } }
    );
  }
}
