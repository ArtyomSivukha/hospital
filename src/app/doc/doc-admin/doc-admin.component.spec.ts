import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAdminComponent } from './doc-admin.component';

describe('DocDoctorComponent', () => {
  let component: DocAdminComponent;
  let fixture: ComponentFixture<DocAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
