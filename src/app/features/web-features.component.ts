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

  returnUrl: string;
  /* This uses the Content Item service which is documented here:
   https://canvas.instructure.com/doc/api/file.content_item.html */
  contentItems = {
    '@context': 'http://purl.imsglobal.org/ctx/lti/v1/ContentItem',
    '@graph': [{
      '@type': 'ContentItem',
      'url': '',
      'text': '',
      'mediaType': 'text/html',
      'placementAdvice': {
        'presentationDocumentTarget': 'embed'
        }
      }]
  };

  constructor(private _ltiParamsService: LtiParamsService) {  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  submitFeature(feature) {
    this.contentItems['@graph'][0].text = feature;
    console.log(this.contentItems);
    // this._ltiParamsService.submitForm(this.returnUrl, JSON.stringify(this.test));
  }

  submitForm(form: NgModel) {

  }

  ngOnInit() {
    this._ltiParamsService.getReturnUrl()
      .subscribe(param => {
        this.returnUrl = param;
        this.contentItems['@graph'][0].url = param;
      });
  }
}
