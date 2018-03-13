import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LtiParamsService } from '../lti-params.service';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: []
})
export class PageTemplatesComponent implements OnInit {
  selectedTemplate = 'genericActivity';
  templates: string[] = ['genericActivity', 'genericQuiz'];
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
  courseName: string;
  courseId: string;
  courseClass: string;
  returnUrl: string;

  constructor(private _ltiParamsService: LtiParamsService) { }

  ngOnInit(): void {
    // this._ltiParamsService.getCourseName()
    //     .subscribe(param => {
    //       this.courseName = param;
    //     });
    // this._ltiParamsService.getCourseClass()
    //     .subscribe(param => {
    //       this.courseClass = param;
    //     });
    // this._ltiParamsService.getCourseId()
    //     .subscribe(param => {
    //       this.courseId = param;
    //     });
    // this._ltiParamsService.getReturnUrl()
    //     .subscribe(param => {
    //       this.returnUrl = param;
    //     });
    this.courseName = this._ltiParamsService.getCourseName();
    this.courseId = this._ltiParamsService.getCourseId();
    this.courseClass = this._ltiParamsService.getCourseClass();
    this.returnUrl = this._ltiParamsService.getReturnUrl();
  }

  updateTemplate(value: string) {
    this.selectedTemplate = value;
    console.log(this.selectedTemplate);
  }
}
