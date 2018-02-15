import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-features',
  templateUrl: './web-features.component.html',
  styleUrls: ['./web-features.component.css']
})
export class WebFeaturesComponent implements OnInit {

  private fragment: string;
  makePrimary = false;

  _accordionHeading: string;
  get accordionHeading(): string {
    return this._accordionHeading;
  }
  set accordionHeading(value: string) {
    this._accordionHeading = value;
  }

  _accordionContent: string;
  get accordionContent(): string {
    return this._accordionContent;
  }
  set accordionContent(value: string) {
    this._accordionContent = value;
  }

  _buttonText: string;
  get buttonText(): string {
    return this._buttonText;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }

  _calloutText: string;
  get calloutText(): string {
    return this._calloutText;
  }
  set calloutText(value: string) {
    this._calloutText = value;
  }

  constructor(private route: ActivatedRoute) {  }

  toggleButton(): void {
    this.makePrimary = !this.makePrimary;
  }

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
