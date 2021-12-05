import { AppService } from './../../shared/services/app.service';
import { Observable } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  passwordHide = true;
  profileForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  showError: string | null = null;

  constructor(
    private authApiService: AuthService,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.profileForm.valid) {
      this.showError = 'Заполните корректно форму!';
      return;
    }
    this.authApiService.signIn(this.profileForm.value).subscribe(
      (res: HttpResponse<any>) => {
        this.router.navigate(['']);
        this.appService.user = res;
      },
      (res) => {
        this.showError = res.error.message ?? 'Произошла ошибка. Попробуйте еще раз';
      }
    );
  }
}
