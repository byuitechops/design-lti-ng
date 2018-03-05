import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { LtiParamsService } from '../lti-params.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css'],
})
export class WebFeaturesComponent implements OnInit {

  private fragment: string;


  tableStriped = false;
  returnUrl: string;
  /* This uses the Content Item service which is documented here:
   https://canvas.instructure.com/doc/api/file.content_item.html */
  contentItems = {
    '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
    '@graph': [{
      '@type': 'ContentItem',
      'url': this.returnUrl,
      'text': '<p>Whaaaa?</p>',
      'mediaType': 'text/html',
      'placementAdvice': {
        'presentationDocumentTarget': 'embed'
        }
      }]
  };
  test: string = JSON.stringify(this.contentItems);

  _popoverBaseText: string;
  get popoverBaseText(): string {
    return this._popoverBaseText;
  }
  set popoverBaseText(value: string) {
    this._popoverBaseText = value;
  }

  _popoverText: string;
  get popoverText(): string {
    return this._popoverText;
  }
  set popoverText(value: string) {
    this._popoverText = value;
  }

  constructor(private _ltiParamsService: LtiParamsService) {  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  submitFeature(featureName) {
    this.contentItems['@graph'][0].text = '<p>Whaaaa?</p>';
    this._ltiParamsService.submitForm(this.returnUrl, JSON.stringify(this.test));
    console.log('submitted');
  }

  submitForm(form: NgModel) {

  }

  ngOnInit() {
    this._ltiParamsService.getReturnUrl()
    .subscribe(param => {
      this.returnUrl = param;
    });
  }
}
