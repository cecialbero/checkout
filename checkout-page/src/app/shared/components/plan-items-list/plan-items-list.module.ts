import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanItemsListComponent } from './plan-items-list.component';


@NgModule({
  declarations: [PlanItemsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlanItemsListComponent
  ]
})
export class PlanItemsListModule { }
