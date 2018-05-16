import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveQuizComponent } from './ponder-prove/ponder-prove-quiz.component';

@Component({
  selector: 'app-quiz-wrapper',
  templateUrl: './quiz-wrapper.component.html',
  styles: []
})
export class QuizWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveQuizComponent) preview: PonderProveQuizComponent;

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
