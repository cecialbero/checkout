import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyInfo } from '../model/company-info';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private http: HttpClient) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>('http://localhost:3000/company')
      .pipe(
        map(data => data)
      );
  }
}
