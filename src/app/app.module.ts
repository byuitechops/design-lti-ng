import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot([
      { path: 'web-features', component: WebFeaturesComponent },
      { path: '', redirectTo: 'web-features', pathMatch: 'full' },
      { path: '**', redirectTo: 'web-features', pathMatch: 'full' }
    ]),
    FeaturesModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
