import { MatSnackBar } from '@angular/material/snack-bar';
import { DocService } from './../../shared/services/doc.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doc-type-detail',
  templateUrl: './doc-type-detail.component.html',
  styleUrls: ['./doc-type-detail.component.scss'],
})
export class DocTypeDetailComponent implements OnInit {
  @Input() docTypes: any;
  @Output() updateDocTypes = new EventEmitter<any>();
  search = '';

  constructor(private snackBar: MatSnackBar, private docApi: DocService) {}

  ngOnInit(): void {}

  loadDocTypes() {
    this.updateDocTypes.emit(this.search);
  }

  removeDocType(docType: any) {
    this.docApi.removeDocType(docType.id).subscribe(
      (res) => {
        this.loadDocTypes();
      },
      (err) => {
        this.snackBar.open(`Ошибка`, undefined, {
          duration: 3000,
        });
      }
    );
  }
}
