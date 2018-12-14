import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: []
})
export class AccordionComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  @ViewChild('Preview') preview: ElementRef;

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

  chooseFeature() {
    const html = this.preview.nativeElement.innerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
