import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PlanComponent } from './plan/plan.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { UserSliderYearComponent } from './shared/components/user-slider-year/user-slider-year.component';
import { PlanItemsListComponent } from './shared/components/plan-items-list/plan-items-list.component';

// Services
import { PlansService } from './services/plans.service';
import { UserTypeService } from './services/user-type.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent,
    PlanComponent,
    UserTypeComponent,
    SliderComponent,
    UserSliderYearComponent,
    PlanItemsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlansService,
    UserTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
