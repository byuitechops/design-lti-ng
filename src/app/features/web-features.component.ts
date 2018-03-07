import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { LtiParamsService } from '../lti-params.service';
import { NgModel } from '@angular/forms';
import { AccordionComponent } from './web-features/accordion.component';
import { BannerComponent } from './web-features/banner.component';
import { ButtonComponent } from './web-features/button.component';
import { CalloutComponent } from './web-features/callout.component';
import { ColumnsComponent } from './web-features/columns.component';
import { DefinitionComponent } from './web-features/definition.component';
import { DialogComponent } from './web-features/dialog.component';
import { ImageComponent } from './web-features/image.component';
import { ImageCarouselComponent } from './web-features/image-carousel.component';
import { PopoverComponent } from './web-features/popover.component';
import { TableComponent } from './web-features/table.component';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css'],
})
export class WebFeaturesComponent implements OnInit {

  private fragment: string;

  // add new feature components to this array
  featureTypes = [AccordionComponent, BannerComponent, ButtonComponent, CalloutComponent,
    ColumnsComponent, DefinitionComponent, DialogComponent, ImageComponent,
    ImageCarouselComponent, PopoverComponent, TableComponent];

  // and the name of the component here as a string. Make sure it's in the same order as above
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
