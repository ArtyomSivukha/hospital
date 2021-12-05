import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm?: FormGroup;

  constructor(
    private appService: AppService,
    private snackBar: MatSnackBar,
    private userApi: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const user = this.user;
    this.profileForm = new FormGroup({
      Firstname: new FormControl(user.firstname, [Validators.required]),
      Lastname: new FormControl(user.lastname, [Validators.required]),
      DateOfBirth: new FormControl(user.dateOfBirth, [Validators.required]),
      HomeAddress: new FormControl(user.homeAddress, [Validators.required]),
    });
  }

  get user() {
    return this.data?.user ?? this.appService.user;
  }

  onSubmit() {
    this.userApi
      .updateUser({
        ...this.profileForm?.value,
        Id: this.user.id,
        Email: this.user.email,
        Password: this.user.password,
        Username: this.user.login
      })
      .subscribe(
        (res) => {
          this.snackBar.open(`Профиль обновлен`, undefined, {
            duration: 3000,
          });
          this.appService.loadUser();
          this.data.callback();
        },
        (err) => {
          this.snackBar.open(`Ошибка`, undefined, {
            duration: 3000,
          });
        }
      );
  }
}
