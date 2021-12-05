import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTypeDialogComponent } from './doc-type-dialog.component';

describe('DocTypeDialogComponent', () => {
  let component: DocTypeDialogComponent;
  let fixture: ComponentFixture<DocTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocTypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
