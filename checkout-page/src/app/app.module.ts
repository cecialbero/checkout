import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PlanComponent } from './plan/plan.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { UserSliderYearComponent } from './shared/components/user-slider-year/user-slider-year.component';
import { PlansService } from './services/plans.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent,
    PlanComponent,
    UserTypeComponent,
    SliderComponent,
    UserSliderYearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
