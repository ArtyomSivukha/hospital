import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../shared/services/app.service';
import { UserService } from '../shared/services/user.service';
import { ProfileComponent } from '../shared/profile/profile.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users?: any[];

  constructor(
    private dialog: MatDialog,
    private userApi: UserService,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userApi.getAll().subscribe(
      (res: any) => {
        this.users = res;
      },
      (err) => {
        this.snackBar.open(`Ошибка`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  updateUser(user: any) {
    this.dialog.open(ProfileComponent, {
      width: '20rem',
      data: { user, callback: () => this.loadUser() },
    });
  }

  takeDoctorRole(user: any) {
    this.userApi.takeDoctorRole(user.id).subscribe(
      () => {
        this.loadUser();
      },
      () => {
        this.snackBar.open(`Ошибка`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  removeUser(user: any) {
    this.userApi.removeUser(user.id).subscribe(
      () => {
        this.loadUser();
      },
      () => {
        this.snackBar.open(`Ошибка`, undefined, {
          duration: 3000,
        });
      }
    );
  }
}
