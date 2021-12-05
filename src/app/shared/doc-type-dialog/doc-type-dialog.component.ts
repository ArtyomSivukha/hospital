import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocService } from './../services/doc.service';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-doc-type-dialog',
  templateUrl: './doc-type-dialog.component.html',
  styleUrls: ['./doc-type-dialog.component.scss'],
})
export class DocTypeDialogComponent implements OnInit {
  docTypes: any;

  constructor(
    private dialogRef: MatDialogRef<DocTypeDialogComponent>,
    private docApiService: DocService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDocType();
  }

  loadDocType() {
    this.docApiService.getAllDocType().subscribe(
      (res) => {
        this.docTypes = res;
      },
      (err) => {
        this.snackBar.open(`Ошибка ${err}`, undefined, {
          duration: 3000,
        });
        this.dialogRef.close();
        this.router.navigate(['/patient']);
      }
    );
  }
}
