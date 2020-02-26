import { Injectable } from '@angular/core';

@Injectable()
export class UserTypeService {

  constructor() { }

  startupPlan: Object = {
    title: 'Startup',
    description: ['Growing startup', 'Freelancer with a few rotating clients'],
    items: [
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
    ]
  };

  businessPlan: Object = {
    title: 'Business',
    description: ['Leading design team within a big company', 'Distributed business in which visual collaboration is key to success'],
    items: [
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
    ]
  };

  enterprisePlan: Object = {
    title: 'Enterprise',
    description: ['Business that successfully integrated BoxLab and is ready to deploy at scale', 'Design-led Fortune 1000 Company'],
    items: [
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
    ]
  };

  getStartupPlan() {
    return this.startupPlan;
  }

  getBusinessPlan() {
    return this.businessPlan;
  }

  getEnterprisePlan() {
    return this.enterprisePlan;
  }

}
