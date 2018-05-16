import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { StudyComponent } from './prepare/study.component';

@Component({
  selector: 'app-study-wrapper',
  templateUrl: './study-wrapper.component.html',
  styles: []
})
export class StudyWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(StudyComponent) preview: StudyComponent;

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
