import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() step: number;
  @Input() initialValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;

  constructor() { }

  ngOnInit() {
  }

  valueRange(value) {
    console.log(value);
  }

}
