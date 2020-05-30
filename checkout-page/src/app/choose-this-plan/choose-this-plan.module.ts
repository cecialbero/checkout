import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChooseThisPlanComponent } from './choose-this-plan.component';

const routes: Routes = [
  { path: '', component: ChooseThisPlanComponent }
];

@NgModule({
  declarations: [ChooseThisPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ChooseThisPlanComponent]
})
export class ChooseThisPlanModule { }
