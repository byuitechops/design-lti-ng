import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaRolePlayDiscussionComponent } from './teach-one-another/toa-role-play-discussion.component';

@Component({
  selector: 'app-role-play-wrapper',
  templateUrl: './role-play-wrapper.component.html',
  styles: []
})
export class RolePlayWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaRolePlayDiscussionComponent) preview: ToaRolePlayDiscussionComponent;

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
