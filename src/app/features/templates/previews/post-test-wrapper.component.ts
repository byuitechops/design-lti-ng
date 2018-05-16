import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveUnansweredQuestionsComponent } from './ponder-prove/ponder-prove-unanswered-questions.component';

@Component({
  selector: 'app-post-test-wrapper',
  templateUrl: './post-test-wrapper.component.html',
  styles: []
})
export class PostTestWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveUnansweredQuestionsComponent) preview: PonderProveUnansweredQuestionsComponent;

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
