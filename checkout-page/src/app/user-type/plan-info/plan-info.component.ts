import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.scss']
})
export class PlanInfoComponent implements OnInit {

  planList = [
    {
      info: '5 Project Rooms'
    },
    {
      info: 'xGB Storage'
    },
    {
      info: 'Visual Thinking Tools'
    },
    {
      info: 'Collaboration Tools'
    },
    {
      info: 'Self-Service Support'
    },
    {
      info: '-'
    },
    {
      info: '-'
    },
    {
      info: '-'
    },
    {
      info: '-'
    },
    {
      info: '-'
    },
    {
      info: '-'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
