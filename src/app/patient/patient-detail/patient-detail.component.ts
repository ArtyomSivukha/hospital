import { DocService } from './../../shared/services/doc.service';
import { AppService } from './../../shared/services/app.service';
import { DocTypeDialogComponent } from './../../shared/doc-type-dialog/doc-type-dialog.component';
import { PatientService } from './../../shared/services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

const defaultDoc = {
  Title: '',
  PatientId: 2,
  DoctorId: 3,
};

@Component({
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  user: any;
  choosedDocType: any;
  doc: any;
  patientId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private patientApi: PatientService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private docService: DocService
  ) {}

  ngOnInit(): void {
    this.loadUserDetail();
  }

  chooseDocType() {
    const dialogRef = this.dialog.open(DocTypeDialogComponent, { width: '50vw' });

    dialogRef.afterClosed().subscribe((result) => {
      this.choosedDocType = result;
      this.doc = {
        title: '',
        patientId: +(this.patientId || '0'),
        doctorId: this.appService.user.id,
        indicator: result,
      };
    });
  }

  loadUserDetail(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.patientId = params.id;
      this.patientApi.getUser(params.id).subscribe(
        (res) => {
          this.user = res;
        },
        (err) => {
          this.snackBar.open(`Ошибка пользователь не найден.`, undefined, {
            duration: 3000,
          });
          this.router.navigate(['/patient']);
        }
      );
    });
  }

  docSave(doc: any) {
    this.docService.createDoc({ ...doc, Note: 'Some notes' }).subscribe(
      (res) => {
        this.snackBar.open(`Документ создан`, undefined, {
          duration: 3000,
        });
        this.loadUserDetail();
      },
      (err) => {
        console.log(err);
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
      }
    );
  }
}
