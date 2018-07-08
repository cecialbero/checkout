export class PlansService {
  getPlans() {
    return [
            {
              numberOfUsers: 6,
              pricePerYear: 200
            },
            {
              numberOfUsers: 7,
              pricePerYear: 250
            },
            {
              numberOfUsers: 8,
              pricePerYear: 280
            },
            {
              numberOfUsers: 10,
              pricePerYear: 320
            }
          ];
  }
}
