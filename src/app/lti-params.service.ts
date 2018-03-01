import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// const server = require('../../bin/www');

@Injectable()
export class LtiParamsService {
  address = 'https://localhost:1820/api/';

  constructor(private http: HttpClient) {
    /* this.address = server.address(); */
  }

  getCourseName(): Observable<string> {
    return this.http.get<string>(this.address + 'course-name');
  }
  getCourseClass(): Observable<string> {
    return this.http.get<string>(this.address + 'course-class');
  }
  getCourseId(): Observable<string> {
    return this.http.get<string>(this.address + 'course-id');
  }
  getReturnUrl(): Observable<string> {
    return this.http.get<string>(this.address + 'return-url');
  }
}
