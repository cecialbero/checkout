import { Component } from '@angular/core';
import { CurrentPlanService } from '../../services/current-plan.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {

  public currentPlan: any;

  constructor(service: CurrentPlanService) {
    this.currentPlan = service.getCurrentPlan();
  }

}
