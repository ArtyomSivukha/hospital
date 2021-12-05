import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocTypeRoutingModule } from './doc-type-routing.module';
import { DocTypeComponent } from './doc-type.component';
import { DocTypeDetailComponent } from './doc-type-detail/doc-type-detail.component';
import { DocTypeNewComponent } from './doc-type-new/doc-type-new.component';


@NgModule({
  declarations: [
    DocTypeComponent,
    DocTypeDetailComponent,
    DocTypeNewComponent,
  ],
  imports: [
    CommonModule,
    DocTypeRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class DocTypeModule { }
