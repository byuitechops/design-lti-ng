import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css']
})
export class WebFeaturesComponent implements OnInit {

  private fragment: string;
  _accordionHeading: string;
  _accordionContent: string;
  get accordionHeading(): string {
    return this._accordionHeading;
  }
  set accordionHeading(value: string) {
    this._accordionHeading = value;
  }
  get accordionContent(): string {
    return this._accordionContent;
  }
  set accordionContent(value: string) {
    this._accordionContent = value;
  }
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
