import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareInterviewComponent } from './prepare/prepare-interview.component';

@Component({
  selector: 'app-interview-wrapper',
  templateUrl: './interview-wrapper.component.html',
  styles: []
})
export class InterviewWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareInterviewComponent) preview: PrepareInterviewComponent;

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
