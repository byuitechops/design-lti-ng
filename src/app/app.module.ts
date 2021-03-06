import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebFeaturesComponent } from './features/web-features.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeaturesModule,
    RouterModule.forRoot([
      { path: 'page-templates', component: WebFeaturesComponent },
      { path: '', redirectTo: 'page-templates', pathMatch: 'full' },
      { path: '**', redirectTo: 'page-templates', pathMatch: 'full' }
    ]),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
