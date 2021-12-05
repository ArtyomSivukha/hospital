import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from './../../shared/services/app.service';
import { DocService } from './../../shared/services/doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './doc-admin.component.html',
  styleUrls: ['./doc-admin.component.scss'],
})
export class DocAdminComponent implements OnInit {
  documents: any;
  search = '';

  constructor(private docService: DocService, private appService: AppService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadDoc();
  }

  loadDoc() {
    if (this.search) {
      this.docService.getAllDocs(this.search).subscribe(
        (res) => {
          this.documents = res;
        },
        (err) => {
          this.snackBar.open(`Ошибка ${err}`, undefined, {
            duration: 3000,
          });
        }
      );
    } else {
      this.docService.getAllDocs().subscribe(
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

  removeDoc(docType: any) {
    this.docService.removeDoc(docType.id).subscribe(
      () => {
        this.loadDoc();
      },
      () => {
        this.loadDoc();
      }
    );
  }

  get user() {
    return this.appService.user;
  }
}
