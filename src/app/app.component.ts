import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected = 'pageTemplates';

  _headingText: string;

  get headingText(): string {
    return this._headingText;
  }

  set headingText(value: string) {
    this._headingText = value;
  }

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  setTab(value: string) {
    this.selected = value;
  }
}
