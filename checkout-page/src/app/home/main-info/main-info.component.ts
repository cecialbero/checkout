import { Component, OnInit } from '@angular/core';
import { CurrentPlanService } from '../../services/current-plan.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  public currentPlan: any = {};

  constructor(public service: CurrentPlanService) {
  }

  ngOnInit() {
    this.service.getCurrentPlan()
    .subscribe((data: any) => {
      if (data) {
        this.currentPlan = data;
      }
    });
  }

}
