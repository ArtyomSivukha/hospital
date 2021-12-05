import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from './../services/app.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private appService: AppService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  get user() {
    return this.appService.user;
  }

  logout() {
    this.appService.logout().subscribe(
      (res) => {
        this.appService.user = null;
        this.router.navigate(['sign', 'in']);
      },
      (err) => {
        this.snackBar.open(`Что-то пошло не так`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  openProfile() {
    this.dialog.open(ProfileComponent, {
      width: '20rem',
    });
  }
}
