import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageTemplatesComponent } from './page-templates.component';
import { WebFeaturesComponent } from './web-features.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'page-templates', component: PageTemplatesComponent },
      { path: 'web-features', component: WebFeaturesComponent }
    ]) 
  ],
  exports: [
    WebFeaturesComponent
  ],
  declarations: [
    PageTemplatesComponent,
    WebFeaturesComponent
  ]
})
export class FeaturesModule { }
