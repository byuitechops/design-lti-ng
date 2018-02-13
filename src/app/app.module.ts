import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WebFeaturesComponent } from './features/web-features.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WebFeaturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    RouterModule.forRoot([
      { path: 'web-features', component: WebFeaturesComponent },
      { path: '', redirectTo: 'web-features', pathMatch: 'full' },
      { path: '**', redirectTo: 'web-features', pathMatch: 'full' }
    ])
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
