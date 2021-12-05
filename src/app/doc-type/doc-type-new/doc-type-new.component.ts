import { MatSnackBar } from '@angular/material/snack-bar';
import { DocService } from './../../shared/services/doc.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-type-new',
  templateUrl: './doc-type-new.component.html',
  styleUrls: ['./doc-type-new.component.scss'],
})
export class DocTypeNewComponent implements OnInit {
  docTypeForm?: FormGroup;
  showError?: string;
  @Output() updateDocTypes = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private docApiService: DocService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.docTypeForm = this.fb.group({
      Name: this.fb.control('', [Validators.required]),
      Indicators: this.fb.array([], [Validators.minLength(1)]),
    });
  }

  addIndicator() {
    (this.docTypeForm?.controls.Indicators as FormArray).push(this.fb.control('', [Validators.required]));
  }

  onSubmit() {
    this.docApiService.createDocType(this.docTypeForm?.value).subscribe(
      (res) => {
        this.snackBar.open(`Шаблон создан`, undefined, {
          duration: 3000,
        });
        this.updateDocTypes.emit();
      },
      (err) => {
        console.log(err);
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
      }
    );
  }

  getControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  clear() {
    this.docTypeForm?.controls.Name.setValue('');
    (this.docTypeForm?.controls.Indicators as FormArray).controls = [];
  }

  get indicatordFormArray(): FormArray {
    return this.docTypeForm?.controls.Indicators as FormArray;
  }
}
