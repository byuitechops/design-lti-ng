import { Component, AfterViewInit } from '@angular/core';
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
import { VideoComponent } from './web-features/video.component';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css'],
})
export class WebFeaturesComponent implements AfterViewInit {

  private fragment: string;

  // add new feature components to this array
  featureTypes = [AccordionComponent, ButtonComponent, CalloutComponent,
    ColumnsComponent, DefinitionComponent, DialogComponent, ImageComponent,
    PopoverComponent, TableComponent, VideoComponent];

  // and the name of the component here as a string. Make sure it's in the same order as above
  features: string[] = ['accordion', 'button', 'callout',
  'columns', 'definition', 'dialog', 'image', 'popover', 'table', 'video'];

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

  constructor(private _ltiParamsService: LtiParamsService) { }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  updateFeature(feature) {
    // insert the html string to the content items
    this.contentItems['@graph'][0].text = feature;
    this.contentItemsJson = JSON.stringify(this.contentItems);
    // make sure that the value updates before you submit
    const input = <HTMLInputElement>document.getElementById('contentItems');
    input.value = this.contentItemsJson;
    // submit the form
    const form = <HTMLFormElement>document.getElementById('submit');
    form.submit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.returnUrl = this._ltiParamsService.getReturnUrl();
    }, 1000);
  }
}
