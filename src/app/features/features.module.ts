import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageTemplatesComponent } from './page-templates.component';
import { WebFeaturesComponent } from './web-features.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { RangePipe } from '../shared/range.pipe';
import { GenericActivityComponent } from './templates/previews/generic-activity.component';
import { GenericQuizComponent } from './templates/previews/generic-quiz.component';
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
import { ImagePreviewComponent } from './web-features/previews/image-preview.component';
import { ImageCarouselPreviewComponent } from './web-features/previews/image-carousel-preview.component';
import { PopoverPreviewComponent } from './web-features/previews/popover-preview.component';
import { TablePreviewComponent } from './web-features/previews/table-preview.component';
import { ContentBoxComponent } from './web-features/content-box.component';
import { BannerImageComponent } from './web-features/banner-image.component';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { DynamicModule } from 'ng-dynamic-component';
import { OrgTemplateComponent } from './templates/org-template.component';
import { HomePageComponent } from './templates/home-page.component';
import { HomePagePreviewComponent } from './templates/previews/home-page-preview.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'page-templates', component: PageTemplatesComponent },
      { path: 'web-features', component: WebFeaturesComponent }
    ]),
    DynamicModule.withComponents([
      AccordionComponent,
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
      TableComponent])
  ],
  exports: [
    // WebFeaturesComponent
  ],
  declarations: [
    PageTemplatesComponent,
    WebFeaturesComponent,
    CapitalizePipe,
    RangePipe,
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
    DialogPreviewComponent,
    ImagePreviewComponent,
    ImageCarouselPreviewComponent,
    PopoverPreviewComponent,
    TablePreviewComponent,
    ContentBoxComponent,
    BannerImageComponent,
    FeatureWrapperComponent,
    OrgTemplateComponent,
    HomePageComponent,
    HomePagePreviewComponent
  ],
  providers: [
    LtiParamsService
  ],
  entryComponents: [
    AccordionComponent,
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
    TableComponent
  ]
})
export class FeaturesModule { }
