import { Component, OnInit } from '@angular/core';
import { CurrentPlanService } from '../../services/current-plan.service';

@Component({
  selector: 'app-current-plan',
  templateUrl: './current-plan.component.html',
  styleUrls: ['./current-plan.component.scss']
})
export class CurrentPlanComponent implements OnInit {

  public currentPlan = <any>{};

  constructor(public service: CurrentPlanService) {
  }

  ngOnInit() {
    this.service.getCurrentPlan()
    .subscribe( (data: any) => {
      if (data) {
        this.currentPlan = data;
      }
    });
  }

}
