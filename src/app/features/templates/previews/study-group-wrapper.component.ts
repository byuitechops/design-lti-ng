import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaStudyGroupComponent } from './teach-one-another/toa-study-group.component';

@Component({
  selector: 'app-study-group-wrapper',
  templateUrl: './study-group-wrapper.component.html',
  styles: []
})
export class StudyGroupWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaStudyGroupComponent) preview: ToaStudyGroupComponent;

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
