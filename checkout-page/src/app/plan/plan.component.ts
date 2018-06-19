import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

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

  ngOnInit() {
  }

  onSelectMonth() {
    this.yearValue = false;
    this.monthValue = true;
  }

  onSelectYear() {
    this.monthValue = false;
    this.yearValue = true;
  }

  valueRange(value) {
    this.businessAmountPerYear = value;

    switch (value) {
      case '600':
        this.business.users = 5;
        break;

      case '700':
        this.business.users = 6;
        break;

      case '800':
        this.business.users = 7;
        break;

      case '900':
        this.business.users = 8;
        break;

      default:
        this.business.users = 10;
    }
  }

}
