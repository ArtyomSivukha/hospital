import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTypeDetailComponent } from './doc-type-detail.component';

describe('DocTypeDetailComponent', () => {
  let component: DocTypeDetailComponent;
  let fixture: ComponentFixture<DocTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
