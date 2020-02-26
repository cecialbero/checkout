import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  startupPlan: any;
  startupTitle: string;
  startupList: any;
  startupDescription: any;
  businessPlan: any;
  businessTitle: string;
  businessList: any;
  businessDescription: any;
  enterprisePlan: any;
  enterpriseTitle: string;
  enterpriseList: any;
  enterpriseDescription: any;

  constructor(private service: UserTypeService) {
    this.startupPlan = service.getStartupPlan();
    this.startupTitle = this.startupPlan.title;
    this.startupList = this.startupPlan.items;
    this.startupDescription = this.startupPlan.description;

    this.businessPlan = service.getBusinessPlan();
    this.businessTitle = this.businessPlan.title;
    this.businessList = this.businessPlan.items;
    this.businessDescription = this.businessPlan.description;

    this.enterprisePlan = service.getEnterprisePlan();
    this.enterpriseTitle = this.enterprisePlan.title;
    this.enterpriseList = this.enterprisePlan.items;
    this.enterpriseDescription = this.enterprisePlan.description;
  }

  ngOnInit() {
  }

}
