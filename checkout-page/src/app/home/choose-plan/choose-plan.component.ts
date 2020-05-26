import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../services/company-info.service';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit {

  public company = <any>{};

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

  constructor(public companyService: CompanyInfoService) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
    .subscribe((data: any) => {
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


}
