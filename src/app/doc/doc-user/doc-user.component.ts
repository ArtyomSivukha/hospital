import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from './../../shared/services/app.service';
import { DocService } from './../../shared/services/doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './doc-user.component.html',
  styleUrls: ['./doc-user.component.scss']
})
export class DocUserComponent implements OnInit {
  documents: any;

  constructor(private docService: DocService, private appService: AppService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.docService.getUsersDocs().subscribe(
      (res) => {
        this.documents = res;
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
