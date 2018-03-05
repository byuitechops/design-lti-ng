import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: []
})
export class AccordionComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
