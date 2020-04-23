import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SelectModule } from '../shared/components/select/select.module';

const routes: Routes = [
  { path: '', component: ContactUsComponent }
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SelectModule
  ],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }
