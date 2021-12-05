import { DocUserComponent } from './doc-user/doc-user.component';
import { DocDoctorComponent } from './doc-doctor/doc-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocAdminComponent } from './doc-admin/doc-admin.component';

const routes: Routes = [
  { path: 'doctor', component: DocDoctorComponent },
  { path: 'admin', component: DocAdminComponent },
  { path: 'user', component: DocUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocRoutingModule {}
