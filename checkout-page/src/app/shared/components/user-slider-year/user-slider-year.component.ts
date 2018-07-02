import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-user-slider-year',
  templateUrl: './user-slider-year.component.html',
  styleUrls: ['./user-slider-year.component.scss']
})
export class UserSliderYearComponent implements OnInit {

  @Input() numberOfUsers: number;
  @Input() pricePerYear: number;

  constructor() { }

  ngOnInit() {
  }

}
