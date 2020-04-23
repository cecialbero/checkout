import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PlanComponent } from './plan/plan.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { PlanItemsListModule } from '../shared/components/plan-items-list/plan-items-list.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    MainInfoComponent,
    PlanComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    PlanItemsListModule,
    RouterModule.forChild(routes)
  ],
  exports: [PlanItemsListModule]
})
export class HomeModule { }
