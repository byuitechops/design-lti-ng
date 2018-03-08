import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CalloutPreviewComponent } from './previews/callout-preview.component';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styles: []
})
export class CalloutComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(CalloutPreviewComponent) preview: CalloutPreviewComponent;

  positions: string[] = ['left', 'center', 'right'];
  sizes: string[] = ['full', 'half', 'quarter'];
  calloutPosition = 'right';
  calloutSize = 'quarter';
  calloutChecked = false;

  _calloutText: string;
  get calloutText(): string {
    return this._calloutText;
  }
  set calloutText(value: string) {
    this._calloutText = value;
  }

  constructor() { }

  changeCalloutPosition(value: string): void {
    this.calloutPosition = value;
  }

  changeCalloutSize(value: string): void {
    this.calloutSize = value;
  }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
