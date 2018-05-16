import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaInsightSharingComponent } from './teach-one-another/toa-insight-sharing.component';

@Component({
  selector: 'app-insight-sharing-wrapper',
  templateUrl: './insight-sharing-wrapper.component.html',
  styles: []
})
export class InsightSharingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaInsightSharingComponent) preview: ToaInsightSharingComponent;

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
