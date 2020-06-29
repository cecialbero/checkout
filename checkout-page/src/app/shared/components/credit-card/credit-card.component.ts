import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() cardNumber: any;
  @Input() name: string;
  @Input() expiration: any;

  constructor() { }

  ngOnInit() {
    this.name = 'Name';
    this.cardNumber = '0000 0000 0000 0000';
    this.expiration = '00/00';
  }

}
