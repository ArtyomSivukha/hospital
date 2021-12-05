import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTypeNewComponent } from './doc-type-new.component';

describe('DocTypeNewComponent', () => {
  let component: DocTypeNewComponent;
  let fixture: ComponentFixture<DocTypeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocTypeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTypeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
