import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
const server = require('../../bin/www');

export interface LtiParam {
  param: string;
}

@Injectable()
export class LtiParamsService {
  address: string;
  contentItems = {
    '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
    '@graph': [{
      '@type': 'ContentItem',
      'text': '',
      'mediaType': 'text/html',
      'placementAdvice': {
        'presentationDocumentTarget': 'embed'
        }
      }]
  };

  constructor(private http: HttpClient) {
    this.address = server.address();
  }

  getCourseName(): Observable<LtiParam> {
    return this.http.get<LtiParam>(this.address + '/api/course-name');
  }
  getCourseClass(): Observable<LtiParam> {
    return this.http.get<LtiParam>(this.address + '/api/course-class');
  }
  getCourseNumber(): Observable<LtiParam> {
    return this.http.get<LtiParam>(this.address + '/api/course-number');
  }
  getConentItems(): string {
    return JSON.stringify(this.contentItems);
  }
}
