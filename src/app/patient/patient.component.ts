import { PatientService } from './../shared/services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  showError?: string;

  constructor(private patientApi: PatientService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigate([this.searchForm.controls.search.value]);
  }
}
