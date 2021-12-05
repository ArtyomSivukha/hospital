import { MatSnackBar } from '@angular/material/snack-bar';
import { DocService } from './../shared/services/doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-type',
  templateUrl: './doc-type.component.html',
  styleUrls: ['./doc-type.component.scss'],
})
export class DocTypeComponent implements OnInit {
  docTypes: any;

  constructor(private docApiService: DocService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadDocType();
  }

  loadDocType(search?: string) {
    if (search) {
      this.docApiService.getSearchType(search).subscribe(
        (res) => {
          console.log(res)
          this.docTypes = res;
        },
        (err) => {
          this.snackBar.open(`Ошибка ${err}`, undefined, {
            duration: 3000,
          });
        }
      );
    } else {
      this.docApiService.getAllDocType().subscribe(
        (res) => {
          this.docTypes = res;
        },
        (err) => {
          this.snackBar.open(`Ошибка ${err}`, undefined, {
            duration: 3000,
          });
        }
      );
    }
  }
}
