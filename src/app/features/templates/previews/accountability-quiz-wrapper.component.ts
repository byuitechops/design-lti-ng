import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { AccountabilityQuizComponent } from './ponder-prove/accountability-quiz.component';

@Component({
  selector: 'app-accountability-quiz-wrapper',
  templateUrl: './accountability-quiz-wrapper.component.html',
  styles: []
})
export class AccountabilityQuizWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(AccountabilityQuizComponent) preview: AccountabilityQuizComponent;

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
