import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageTemplatesComponent } from './page-templates.component';
import { WebFeaturesComponent } from './web-features.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { GenericActivityComponent } from './templates/generic-activity.component';
import { GenericQuizComponent } from './templates/generic-quiz.component';
import { LtiParamsService } from '../lti-params.service';
import { AccordionComponent } from './web-features/accordion.component';
import { AccordionPreviewComponent } from './web-features/previews/accordion-preview.component';
import { BannerComponent } from './web-features/banner.component';
import { ButtonComponent } from './web-features/button.component';
import { CalloutComponent } from './web-features/callout.component';
import { ColumnsComponent } from './web-features/columns.component';
import { DefinitionComponent } from './web-features/definition.component';
import { DialogComponent } from './web-features/dialog.component';
import { ImageComponent } from './web-features/image.component';
import { VideoComponent } from './web-features/video.component';
import { ImageCarouselComponent } from './web-features/image-carousel.component';
import { PopoverComponent } from './web-features/popover.component';
import { TableComponent } from './web-features/table.component';
import { BannerPreviewComponent } from './web-features/previews/banner-preview.component';
import { ButtonPreviewComponent } from './web-features/previews/button-preview.component';
import { CalloutPreviewComponent } from './web-features/previews/callout-preview.component';
import { ColumnsPreviewComponent } from './web-features/previews/columns-preview.component';
import { DefinitionPreviewComponent } from './web-features/previews/definition-preview.component';
import { DialogPreviewComponent } from './web-features/previews/dialog-preview.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'page-templates', component: PageTemplatesComponent },
      { path: 'web-features', component: WebFeaturesComponent }
    ])
  ],
  exports: [
    // WebFeaturesComponent
  ],
  declarations: [
    PageTemplatesComponent,
    WebFeaturesComponent,
    CapitalizePipe,
    GenericActivityComponent,
    GenericQuizComponent,
    AccordionComponent,
    AccordionPreviewComponent,
    BannerComponent,
    ButtonComponent,
    CalloutComponent,
    ColumnsComponent,
    DefinitionComponent,
    DialogComponent,
    ImageComponent,
    VideoComponent,
    ImageCarouselComponent,
    PopoverComponent,
    TableComponent,
    BannerPreviewComponent,
    ButtonPreviewComponent,
    CalloutPreviewComponent,
    ColumnsPreviewComponent,
    DefinitionPreviewComponent,
    DialogPreviewComponent
  ],
  providers: [
    LtiParamsService
  ]
})
export class FeaturesModule { }
