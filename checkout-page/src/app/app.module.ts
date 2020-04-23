import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Components
import { HeaderModule } from './shared/components/header/header.module';

// Services
import { PlansService } from './services/plans.service';
import { UserTypeService } from './services/user-type.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [
    PlansService,
    UserTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
