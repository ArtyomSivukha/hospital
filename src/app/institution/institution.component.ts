import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../shared/services/institution.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss'],
})
export class InstitutionComponent implements OnInit {
  institutionForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Website: new FormControl('', [Validators.required]),
  });
  institutions: any;

  constructor(private institutionApi: InstitutionService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadInstitution();
  }

  loadInstitution() {
    this.institutionApi.getInstitution().subscribe(
      (res) => {
        this.institutions = res;
      },
      (err) => {
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  onSubmit() {
    this.institutionApi.createInstitution(this.institutionForm.value).subscribe(
      (res) => {
        this.snackBar.open(`Учреждение создано`, undefined, {
          duration: 3000,
        });
        this.loadInstitution();
      },
      (err) => {
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  assignDoctorAndInst(docId: string, instId: string) {
    this.institutionApi.assignInstitution(`${docId}`, `${instId}`).subscribe(
      (res) => {
        this.snackBar.open(`Доктор прикреплен`, undefined, {
          duration: 3000,
        });
      },
      (err) => {
        this.snackBar.open(`Ошибка`, undefined, {
          duration: 3000,
        });
      }
    );
  }
}
