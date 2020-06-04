import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form.component';

// Components
import { InputModule } from '../input/input.module';
import { CreditCardModule } from '../credit-card/credit-card.module';


@NgModule({
  declarations: [CardFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CreditCardModule
  ],
  exports: [CardFormComponent]
})
export class CardFormModule { }
