import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  startupList = [
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

  businessList = [
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
      info: 'Priority Support'
    },
    {
      info: 'Larger Team Sizes'
    },
    {
      info: 'Custom Templates'
    },
    {
      info: 'Guest Accounts'
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

  enterpriseList = [
    {
      info: 'Unlimited Rooms'
    },
    {
      info: 'Unlimited Storage'
    },
    {
      info: 'Visual Thinking Tools'
    },
    {
      info: 'Collaboration Tools'
    },
    {
      info: 'On-Call Customer Success Manager'
    },
    {
      info: 'Multiple Teams'
    },
    {
      info: 'Custom Templates'
    },
    {
      info: 'Guest Accounts'
    },
    {
      info: 'Enterprise-Grade Security'
    },
    {
      info: 'Admin Dashboard & Analytics'
    },
    {
      info: 'Single Sign-On SAML Integration'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
