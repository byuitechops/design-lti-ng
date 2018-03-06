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
  features: string[] = ['accordion', 'banner', 'button', 'callout',
  'columns', 'definition', 'dialog', 'image', 'imageCarousel', 'popover', 'table'];

  returnUrl: string;
  /* This uses the Content Item service which is documented here:
   https://canvas.instructure.com/doc/api/file.content_item.html */
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

  constructor(private _ltiParamsService: LtiParamsService) {  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  updateFeature(feature) {
    this.contentItems['@graph'][0].text = feature;
    this.contentItemsJson = JSON.stringify(this.contentItems);
    const input = <HTMLInputElement>document.getElementById('contentItems');
    // wait for content to update in html
    input.value = this.contentItemsJson;
    this.submit();
  }

  submit() {
    const form = <HTMLFormElement>document.getElementById('submit');
    form.submit();
  }

  ngOnInit() {
    this._ltiParamsService.getReturnUrl()
      .subscribe(param => {
        this.returnUrl = param;
      });
  }
}
