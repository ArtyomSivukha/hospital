import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, OnInit } from '@angular/core';
import { appConfig } from '../helpers/app.config';

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnInit {
  user?: any;

  constructor(
    private authApiService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.loadUser();
  }

  loadUser() {
    this.authApiService.getUser().subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        this.snackBar.open(`Вы не вошли в систему`, undefined, {
          duration: 3000,
        });
        this.user = null;
        this.router.navigate(['sign']);
      }
    );
  }

  logout() {
    return this.http.post(`${appConfig.baseUrl}/account/logout`, {});
  }

  ngOnInit() {}
}
