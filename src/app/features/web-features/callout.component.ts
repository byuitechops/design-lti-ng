import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styles: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild('Preview') preview: ElementRef;

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
    const html = this.preview.nativeElement.outerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
