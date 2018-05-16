import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveExamComponent } from './ponder-prove/ponder-prove-exam.component';

@Component({
  selector: 'app-exam-wrapper',
  templateUrl: './exam-wrapper.component.html',
  styles: []
})
export class ExamWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveExamComponent) preview: PonderProveExamComponent;

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
