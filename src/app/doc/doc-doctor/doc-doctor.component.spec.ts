import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDoctorComponent } from './doc-doctor.component';

describe('DocDoctorComponent', () => {
  let component: DocDoctorComponent;
  let fixture: ComponentFixture<DocDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
