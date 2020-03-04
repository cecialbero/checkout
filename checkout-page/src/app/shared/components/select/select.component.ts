import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  showOptions = false;

  selectOptionList = [
    {
      name: 'Technical Support'
    },
    {
      name: 'Sales'
    },
    {
      name: 'Other'
    }
  ];

  @HostListener('click')
  onClickSelect() {
    this.showOptions = !this.showOptions;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
