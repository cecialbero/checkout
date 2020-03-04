import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name: string;
  phone: string;

  constructor() { }

  ngOnInit(): void {
  }

  inputsName(event: any) {
    this.name = event.target.value;
  }

  inputsPhone(event: any) {
    this.phone = event.target.value;
  }

  sendData() {
  }

}
