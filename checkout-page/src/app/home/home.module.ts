import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PlanComponent } from './plan/plan.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { PlanItemsListModule } from '../shared/components/plan-items-list/plan-items-list.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainInfoComponent,
    PlanComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    PlanItemsListModule
  ],
  exports: [PlanItemsListModule]
})
export class HomeModule { }
