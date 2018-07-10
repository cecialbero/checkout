import { Component, OnInit, Input, Output } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { PlansService } from '../../../services/plans.service';

@Component({
  selector: 'app-user-slider-year',
  templateUrl: './user-slider-year.component.html',
  styleUrls: ['./user-slider-year.component.scss']
})
export class UserSliderYearComponent implements OnInit {

  @Input() step: number;
  @Input() initialValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;

  numberOfUsers;
  pricePerYear;
  newValue;
  plans;

  constructor(service: PlansService) {
    this.plans = service.getUserAndPrice('200');
    this.numberOfUsers = this.plans.numberOfUsers;
    this.pricePerYear = this.plans.pricePerYear;
  }

  ngOnInit() {
  }

  showValue(event) {
    this.newValue = event.value;
    return this.newValue;
  }

}
