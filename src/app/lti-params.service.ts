import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { LtiParams } from './lti-params';
// const server = require('../../bin/www');

@Injectable()
export class LtiParamsService {
  address = 'https://localhost:1820';
  ltiParams: LtiParams;

  constructor(private http: HttpClient) {
  //   /* this.address = server.address(); */
  //   if (process.env.url) {
  //     this.address = process.env.url;
  //   } else {
  //     this.address = 'https://localhost:1820';
  //   }
  //   this.address += '/api/';
    this.http.get<LtiParams>(this.address + '/api')
    .subscribe(params => {
      this.ltiParams = params;
    });
  }

  getCourseName(): string {
    return this.ltiParams.context_title;
  }

  getCourseClass(): string {
    return this.ltiParams.context_label;
  }

  getCourseId(): string {
    return this.ltiParams.content_item_return_url.split('/')[4];
  }

  getReturnUrl(): Observable<string> {
    return this.http.get<string>(this.address + 'return-url');
    // return this.ltiParams.content_item_return_url;
  }
}
