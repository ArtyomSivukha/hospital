import { NewUser } from './../../shared/helpers/sign/interfaces';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  profileForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    UserName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    PasswordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  showError: string | null = null;

  constructor(private authApiService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.profileForm.valid) {
      this.showError = "Заполните корректно форму!";
      return;
    }
    if (
      this.profileForm.value.Password !== this.profileForm.value.PasswordConfirmation
    ) {
      this.showError = "Пароли должны совпадать!";
      return;
    }
    this.authApiService.signUp(this.profileForm.value as NewUser).subscribe(() => {
      this.router.navigate(['/sign', 'in']);
    }, (res) => {
      this.showError = res.error.message ?? 'Произошла ошибка. Попробуйте еще раз';
    })
  }
}
