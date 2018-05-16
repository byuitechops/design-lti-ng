import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaCaseStudyComponent } from './teach-one-another/toa-case-study.component';

@Component({
  selector: 'app-case-study-wrapper',
  templateUrl: './case-study-wrapper.component.html',
  styles: []
})
export class CaseStudyWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaCaseStudyComponent) preview: ToaCaseStudyComponent;

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
