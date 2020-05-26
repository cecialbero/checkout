import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../model/plan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  public getPlan(): Observable<Plan[]> {
    return this.http.get<Plan[]>('http://localhost:3000/plans')
      .pipe(
        map(data => data)
      );
  }
}
