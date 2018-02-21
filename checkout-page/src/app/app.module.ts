import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { SliderComponent } from './slider/slider.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { PlanInfoComponent } from './user-type/plan-info/plan-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainInfoComponent,
    SliderComponent,
    UserTypeComponent,
    PlanInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
