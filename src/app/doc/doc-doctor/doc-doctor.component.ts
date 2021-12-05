import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from './../../shared/services/app.service';
import { DocService } from './../../shared/services/doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './doc-doctor.component.html',
  styleUrls: ['./doc-doctor.component.scss'],
})
export class DocDoctorComponent implements OnInit {
  documents: any;

  constructor(private docService: DocService, private appService: AppService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.docService.getDoctorDocs(this.appService.user.roleId).subscribe(
      (res) => {
        this.documents = res;
      },
      (err) => {
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
      }
    );
  }
}
