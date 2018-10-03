import { Injectable, OnInit, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { LtiParams } from './lti-params';
import { WindowRef } from './getWindowObj';
// const server = require('../../bin/www');

@Injectable()
export class LtiParamsService {
  address: string;
  ltiParams: LtiParams;

  constructor(private http: HttpClient) {
    if (/* true ||  */isDevMode()) {
      this.address = 'https://localhost:1820';
    } else {
      this.address = 'https://byui-design-lti.herokuapp.com';
    }

    // this.http.get<LtiParams>(this.address + '/api')
    // .subscribe(params => {
    //   console.log(params);
    //   this.ltiParams = params;
    // });
    var hi = new WindowRef(); 
    var window = hi.nativeWindow; 
    //     console.log(window.THE_BEST_EVER);
    this.ltiParams = window.LTI_PARAMS;
    
  }
  
  getCourseName(): string {
    // console.log(Window.THE_BEST_EVER);
    
    return this.ltiParams.context_title;
  }

  getCourseClass(): string {
    return this.ltiParams.context_label;
  }

  getCourseId(): string {
    return this.ltiParams.content_item_return_url.split('/')[4];
  }

  getReturnUrl(): string {
    // return this.http.get<string>(this.address + 'return-url');
    return this.ltiParams.content_item_return_url;
  }
}
