import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaPeerFeedbackComponent } from './teach-one-another/toa-peer-feedback.component';

@Component({
  selector: 'app-peer-feedback-wrapper',
  templateUrl: './peer-feedback-wrapper.component.html',
  styles: []
})
export class PeerFeedbackWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaPeerFeedbackComponent) preview: ToaPeerFeedbackComponent;

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
