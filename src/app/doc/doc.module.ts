import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocDoctorComponent } from './doc-doctor/doc-doctor.component';
import { DocUserComponent } from './doc-user/doc-user.component';
import { FormsModule } from '@angular/forms';
import { DocAdminComponent } from './doc-admin/doc-admin.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [DocDoctorComponent, DocUserComponent, DocAdminComponent],
  imports: [CommonModule, DocRoutingModule, FormsModule, MaterialModule],
})
export class DocModule {}
