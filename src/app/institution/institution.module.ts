import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionRoutingModule } from './institution-routing.module';
import { InstitutionComponent } from './institution.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [InstitutionComponent],
  imports: [CommonModule, InstitutionRoutingModule, ReactiveFormsModule, MaterialModule],
})
export class InstitutionModule {}
