import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {

  monthValue = true;
  yearValue = false;
  businessAmountPerYear = 600;

  startup = {
    users: 5,
    month: 29,
    year: 300
  };

  business = {
    users: 5,
    year: 600,
  };

  enterprise = {
    users: 30
  };

  constructor() { }

  onSelectMonth() {
    this.yearValue = false;
    this.monthValue = true;
  }

  onSelectYear() {
    this.monthValue = false;
    this.yearValue = true;
  }


}
