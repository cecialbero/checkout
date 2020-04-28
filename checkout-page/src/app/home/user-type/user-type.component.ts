import { Component } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent {

  public startupPlan: any;
  public businessPlan: any;
  public enterprisePlan: any;

  constructor(private service: UserTypeService) {
    this.startupPlan = service.getStartupPlan();
    this.businessPlan = service.getBusinessPlan();
    this.enterprisePlan = service.getEnterprisePlan();
  }

}
