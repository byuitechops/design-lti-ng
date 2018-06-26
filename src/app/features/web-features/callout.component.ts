import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CalloutPreviewComponent } from './previews/callout-preview.component';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styles: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(CalloutPreviewComponent) preview: CalloutPreviewComponent;

  positions: string[] = ['left', 'center', 'right'];
  sizes: string[] = ['full', 'half', 'quarter'];
  colors: string[] = ['simple', 'grey', 'green', 'blue', 'orange'];
  calloutPosition = 'right';
  calloutSize = 'quarter';
  color = 'simple';

  calloutHeader: string;
  calloutText: string;

  constructor() { }

  changeCalloutPosition(value: string): void {
    this.calloutPosition = value;
  }

  changeCalloutSize(value: string): void {
    this.calloutSize = value;
  }

  changeColor(value: string): void {
    this.color = value;
  }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
