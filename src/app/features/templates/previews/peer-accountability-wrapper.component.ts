import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaPeerAccountabilityComponent } from './teach-one-another/toa-peer-accountability.component';

@Component({
  selector: 'app-peer-accountability-wrapper',
  templateUrl: './peer-accountability-wrapper.component.html',
  styles: []
})
export class PeerAccountabilityWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaPeerAccountabilityComponent) preview: ToaPeerAccountabilityComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }
}
