import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LtiParamsService } from '../lti-params.service';

@Component({
  selector: 'app-page-templates',
  templateUrl: './page-templates.component.html',
  styleUrls: []
})
export class PageTemplatesComponent implements OnInit {

  templates: string[] = ['orgTemplate', 'homeTemplate'];

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
  contentItemsJson: string;

  courseName: string;
  courseId: string;
  courseClass: string;
  returnUrl: string;

  constructor(private _ltiParamsService: LtiParamsService) { }

  updateFeature(feature) {
    // insert the html string to the content items
    this.contentItems['@graph'][0].text = feature;
    this.contentItemsJson = JSON.stringify(this.contentItems);
    // make sure that the value updates before you submit
    const input = <HTMLInputElement>document.getElementById('contentItems');
    input.value = this.contentItemsJson;
    console.log(this.contentItemsJson);
    // submit the form
    const form = <HTMLFormElement>document.getElementById('submit');
    form.submit();
  }

  ngOnInit(): void {
    this.courseName = this._ltiParamsService.getCourseName();
    this.courseId = this._ltiParamsService.getCourseId();
    this.courseClass = this._ltiParamsService.getCourseClass();
    this.returnUrl = this._ltiParamsService.getReturnUrl();
  }

}
