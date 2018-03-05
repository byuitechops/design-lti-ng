import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styles: []
})
export class CalloutComponent implements OnInit {

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

  ngOnInit() {
  }

}
