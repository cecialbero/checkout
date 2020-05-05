import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(private http: HttpClient) { }

  getPlan() {
    return this.http.get('http://localhost:3000/plans');
  }

}
