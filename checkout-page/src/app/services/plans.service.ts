import { Injectable } from '@angular/core';

@Injectable()
export class PlansService {

  constructor() { }

  // private plans: Array<any> = [
  //   {
  //     numberOfUsers: 6,
  //     firstPlanPrice: 200
  //   },
  //   {
  //     numberOfUsers: 7,
  //     secondPlanPrice: 250
  //   },
  //   {
  //     numberOfUsers: 8,
  //     thirdPlanPrice: 280
  //   },
  //   {
  //     numberOfUsers: 10,
  //     FourthPlanPrice: 320
  //   }
  // ];

  // getPlans() {
  //   return this.plan;
  // }

  getUserAndPrice(value) {
    switch (value) {
      case '200':
      return {
        numberOfUsers: 6,
        pricePerYear: 200
      };
      case '400':
      return {
        numberOfUsers: 7,
        pricePerYear: 250
      };

      case '600':
      return {
        numberOfUsers: 8,
        pricePerYear: 280
      };

      case '800':
      return {
        numberOfUsers: 10,
        pricePerYear: 320
      };
    }
  }

}
