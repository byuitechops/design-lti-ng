import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaTopicDiscussionComponent } from './teach-one-another/toa-topic-discussion.component';

@Component({
  selector: 'app-topic-discussion-wrapper',
  templateUrl: './topic-discussion-wrapper.component.html',
  styles: []
})
export class TopicDiscussionWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaTopicDiscussionComponent) preview: ToaTopicDiscussionComponent;

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
