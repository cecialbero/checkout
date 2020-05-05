import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentPlanService {

  constructor(private http: HttpClient) { }

  getCurrentPlan() {
    return this.http.get('http://localhost:3000/currentPlan');
  }
}
