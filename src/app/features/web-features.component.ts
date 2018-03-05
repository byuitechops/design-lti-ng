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

  dialogPrompt: string;
  dialogTitle: string;
  dialogContent: string;
  imageSize = 'quarter';
  imagePosition = 'right';
  imageClearfix = false;
  imageSource: string;
  slideCount = 0;
  slideSource: string[] = [];
  slideAlt: string[] = [];
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

  _imageCaption: string;
  get imageCaption(): string {
    return this._imageCaption;
  }
  set imageCaption(value: string) {
    this._imageCaption = value;
  }

  _imageAlt: string;
  get imageAlt(): string {
    return this._imageAlt;
  }
  set imageAlt(value: string) {
    this._imageAlt = value;
  }

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

  changeImagePosition(value: string): void {
    this.imagePosition = value;
  }

  changeImageSize(value: string): void {
    this.imageSize = value;
  }


  updateImageSource(value: string): void {
    this.imageSource = value;
  }

  updateSlideCount(value: number): void {
    if (value <= 0) {
      this.slideCount = 0;
    } else {
      this.slideCount = value;
    }
    this.slideSource.length = this.slideCount;
    this.slideAlt.length = this.slideCount;
  }

  updateSlide(value: string, index: number): void {
    this.slideSource[index] = value;
  }

  updateSlideAlt(value: string, index: number): void {
    this.slideAlt[index] = value;
  }

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
