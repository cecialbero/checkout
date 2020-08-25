import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CompanyInfoService } from '../../services/company-info.service';
import { PlanService } from '../../services/plan.service';
import { CompanyInfo } from '../../model/company-info';
import { Plan } from '../../model/plan';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit {

  company = <CompanyInfo>{};
  plan: Plan[];

  monthValue = true;
  yearValue = false;

  basic = {
    users: 5,
    month: 29,
    year: 300
  };

  standard = {
    users: 5,
    year: 600,
  };

  gold = {
    users: 30
  };

  constructor(public companyService: CompanyInfoService,
              public planService: PlanService,
              public router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
    .subscribe((data) => {
      this.company = data;
    });

    this.planService.getPlan()
    .subscribe((data) => {
      this.plan = data;
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
