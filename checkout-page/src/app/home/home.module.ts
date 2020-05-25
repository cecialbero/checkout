import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/*Components*/
import { HomeComponent } from './home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PlanComponent } from './plan/plan.component';
import { UserTypeComponent } from './user-type/user-type.component';

/*Shared Components*/
import { UserSliderYearModule } from '../shared/components/user-slider-year/user-slider-year.module';

/*Services*/
import { PlanService } from '../services/plan.service';
import { CurrentPlanService } from '../services/current-plan.service';

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
    UserSliderYearModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [
    PlanService,
    CurrentPlanService
  ]
})
export class HomeModule { }
