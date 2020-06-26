import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-this-plan',
  templateUrl: './choose-this-plan.component.html',
  styleUrls: ['./choose-this-plan.component.scss']
})
export class ChooseThisPlanComponent implements OnInit {
  public planName: string;

  constructor(private router: Router) {
    /*const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {plan: string};
    this.planName = state.plan;*/
  }

  ngOnInit(): void {
    this.planName = history.state.plan;
    console.log(history);
  }

}
