import { ReactiveFormsModule } from '@angular/forms';
import { DocTypeDialogComponent } from './doc-type-dialog/doc-type-dialog.component';
import { DocEditComponent } from './doc-edit/doc-edit.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HeaderComponent, DocEditComponent, DocTypeDialogComponent, ProfileComponent],
  imports: [CommonModule, LayoutModule, MaterialModule, RouterModule, ReactiveFormsModule],
  exports: [HeaderComponent, DocEditComponent, DocTypeDialogComponent, ProfileComponent],
})
export class SharedModule {}
