import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareQuizWritingComponent } from './prepare/prepare-quiz-writing.component';

@Component({
  selector: 'app-quiz-writing-wrapper',
  templateUrl: './quiz-writing-wrapper.component.html',
  styles: []
})
export class QuizWritingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareQuizWritingComponent) preview: PrepareQuizWritingComponent;

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
