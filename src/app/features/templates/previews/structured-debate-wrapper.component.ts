import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaStructuredDebateComponent } from './teach-one-another/toa-structured-debate.component';

@Component({
  selector: 'app-structured-debate-wrapper',
  templateUrl: './structured-debate-wrapper.component.html',
  styles: []
})
export class StructuredDebateWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaStructuredDebateComponent) preview: ToaStructuredDebateComponent;

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
