import { DoctorGuard } from './shared/helpers/doctor.guard';
import { AuthGuard } from './shared/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthGuard } from './shared/helpers/nonAuth.guard';

const routes: Routes = [
  {
    path: 'sign',
    canActivate: [NonAuthGuard],
    loadChildren: () => import('./sign/sign.module').then((m) => m.SignModule),
  },
  {
    path: 'doc-type',
    canActivate: [AuthGuard],
    loadChildren: () => import('./doc-type/doc-type.module').then((m) => m.DocTypeModule),
  },
  {
    path: 'patient',
    canActivate: [AuthGuard],
    loadChildren: () => import('./patient/patient.module').then((m) => m.PatientModule),
  },
  { path: 'doc', canActivate: [AuthGuard], loadChildren: () => import('./doc/doc.module').then((m) => m.DocModule) },
  {
    path: 'institution',
    canActivate: [AuthGuard],
    loadChildren: () => import('./institution/institution.module').then((m) => m.InstitutionModule),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
