import { Component, OnInit } from '@angular/core';
import { CurrentPlanService } from '../../services/current-plan.service';
import { CurrentPlan } from '../../model/current-plan';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  currentPlan: CurrentPlan;

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
