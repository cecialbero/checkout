import { Component, OnInit, Input, Output } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-user-slider-year',
  templateUrl: './user-slider-year.component.html',
  styleUrls: ['./user-slider-year.component.scss']
})
export class UserSliderYearComponent implements OnInit {

  // @Input() numberOfUsers: number;
  // @Input() pricePerYear: number;
  @Input() step: number;
  @Input() initialValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;

  numberOfUsers = 4;
  pricePerYear = 280;

  constructor() { }

  ngOnInit() {
  }

  showValue(event) {
    switch (event.value) {
      case '200':
        this.numberOfUsers = 2;
        this.pricePerYear = 200;
        break;

      case '400':
        this.numberOfUsers = 3;
        this.pricePerYear = 250;
        break;

      case '600':
        this.numberOfUsers = 4;
        this.pricePerYear = 280;
        break;

      case '800':
        this.numberOfUsers = 5;
        this.pricePerYear = 320;
        break;
    }
  }

}
