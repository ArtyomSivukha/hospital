import { appConfig } from './../helpers/app.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  constructor(private http: HttpClient) {}

  getAllDocType(): Observable<any> {
    return this.http.get(`${appConfig.baseUrl}/documentType`);
  }

  getAllDocs(search?: string): Observable<any> {
    if (search) {
      return this.http.post(`${appConfig.baseUrl}/document/search`, { Title: search });
    }
    return this.http.get(`${appConfig.baseUrl}/document`);
  }

  getDoctorDocs(id: number): Observable<any> {
    return this.http.get(`${appConfig.baseUrl}/document/doctor/${id}`);
  }

  getUsersDocs(): Observable<any> {
    return this.http.get(`${appConfig.baseUrl}/document/myDocuments`);
  }

  createDocType(docType: any): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/documentType/`, docType);
  }

  getSearchType(docType: string): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/documentType/Search`, { Name: docType });
  }

  removeDocType(docTypeId: any): Observable<any> {
    return this.http.delete(`${appConfig.baseUrl}/documentType/`, { params: { id: docTypeId } });
  }

  createDoc(doc: any): Observable<any> {
    return this.http.post(`${appConfig.baseUrl}/document/`, doc);
  }

  removeDoc(docId: any): Observable<any> {
    return this.http.delete(`${appConfig.baseUrl}/document/`, { params: { id: docId } });
  }
}
