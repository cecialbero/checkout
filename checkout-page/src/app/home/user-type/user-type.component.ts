import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  public startupPlan: any = {};
  public businessPlan: any = {};
  public enterprisePlan: any = {};
  public title = 'CHOOSE THIS PLAN IF YOU\RE A...';

  constructor(private service: UserTypeService) { }

  ngOnInit() {
    this.service.getPlan().subscribe( (data: any) => {
      if (data) {
        this.startupPlan = data[0];
        this.businessPlan = data[1];
        this.enterprisePlan = data[2];
      }
    });
  }

}
