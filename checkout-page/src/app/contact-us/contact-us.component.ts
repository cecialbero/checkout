import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from '../model/company-info';
import { CompanyInfoService } from '../services/company-info.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name: string;
  phone: string;
  public company: CompanyInfo;

  selectOptions = ['Technical Support', 'Sales', 'Other'];

  constructor(public companyService: CompanyInfoService) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
      .subscribe((data: any) => {
        if (data) {
          this.company = data;
        }
      });
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
