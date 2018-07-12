import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-items-list',
  templateUrl: './plan-items-list.component.html',
  styleUrls: ['./plan-items-list.component.scss']
})
export class PlanItemsListComponent implements OnInit {

  @Input() planItemTitle: string;
  @Input() planItemList: any[];

  constructor() { }

  ngOnInit() {
  }

}
