import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../services/company-info.service';
import { CompanyInfo } from '../../model/company-info';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit {

  public company = <CompanyInfo>{};

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

  constructor(public companyService: CompanyInfoService,
              public router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
    .subscribe((data) => {
      if (data) {
        this.company = data;
      }
    });
  }

  onSelectMonth() {
    this.yearValue = false;
    this.monthValue = true;
  }

  onSelectYear() {
    this.monthValue = false;
    this.yearValue = true;
  }

  choosePlan(name: string){
    const navigationExtras: NavigationExtras = {state: {plan: name}};
    this.router.navigate(['/choose-this-plan'], navigationExtras);
  }
}
