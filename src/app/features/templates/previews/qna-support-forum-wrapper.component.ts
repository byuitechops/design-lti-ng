import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaQnaSupportForumComponent } from './teach-one-another/toa-qna-support-forum.component';

@Component({
  selector: 'app-qna-support-forum-wrapper',
  templateUrl: './qna-support-forum-wrapper.component.html',
  styles: []
})
export class QnaSupportForumWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaQnaSupportForumComponent) preview: ToaQnaSupportForumComponent;

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
