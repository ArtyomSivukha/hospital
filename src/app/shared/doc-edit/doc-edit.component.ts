import { MatSnackBar } from '@angular/material/snack-bar';
import { DocService } from './../services/doc.service';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doc-edit',
  templateUrl: './doc-edit.component.html',
  styleUrls: ['./doc-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocEditComponent implements OnInit, OnChanges {
  @Output() docSave = new EventEmitter<any>();
  @Input() doc?: any;
  docForm?: FormGroup;
  showError?: string;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.doc) {
      this.docForm = this.fb.group({
        Title: this.fb.control(this.doc.title, [Validators.required]),
        PatientId: this.fb.control(this.doc.patientId, [Validators.required]),
        DoctorId: this.fb.control(this.doc.doctorId, [Validators.required]),
        TypeId: this.doc.indicator.id,
        IndicatorValues: this.fb.array(
          this.doc.indicator.indicators.map((item: any) =>
            this.fb.group({
              IndicatorId: this.fb.control(item.id, [Validators.required]),
              IndicatorValue: this.fb.control(0, [Validators.required]),
              name: item.name,
            })
          )
        ),
      });
    }
  }

  onSubmit() {
    const reqBody = {
      ...this.docForm?.value,
      IndicatorValues: this.docForm?.value.IndicatorValues.map((item: any) => ({
        IndicatorId: item.IndicatorId,
        IndicatorValue: +item.IndicatorValue,
      })),
    };
    this.docSave.emit(reqBody);
  }

  getFormGroupByControl(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  get indicatordFormArray(): FormArray {
    return this.docForm?.controls.IndicatorValues as FormArray;
  }
}
