import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPlanService {

  public currentPlan = {
    type: 'Free 30 Day Trial',
    daysLeft: 13,
    members: 12
  };

  constructor() { }

  getCurrentPlan() {
    return this.currentPlan;
  }
}
