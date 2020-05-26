import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

interface CurrentPlan {
  type: string;
  daysLeft: number;
  members: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentPlanService {
  constructor(private http: HttpClient) { }

  public getCurrentPlan(): Observable<CurrentPlan> {
    return this.http.get<CurrentPlan>('http://localhost:3000/current')
      .pipe(
        map(data => data)
      );
  }
}
