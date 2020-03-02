import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainInfoComponent } from './home/main-info/main-info.component';
import { PlanComponent } from './home/plan/plan.component';
import { UserTypeComponent } from './home/user-type/user-type.component';

// Components
import { HeaderComponent } from './shared/components/header/header.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { UserSliderYearComponent } from './shared/components/user-slider-year/user-slider-year.component';
import { PlanItemsListComponent } from './shared/components/plan-items-list/plan-items-list.component';

// Services
import { PlansService } from './services/plans.service';
import { UserTypeService } from './services/user-type.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';


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
    HomeComponent,
    ContactUsComponent
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
