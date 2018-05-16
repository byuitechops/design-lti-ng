import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaGroupProjectComponent } from './teach-one-another/toa-group-project.component';

@Component({
  selector: 'app-group-project-wrapper',
  templateUrl: './group-project-wrapper.component.html',
  styles: []
})
export class GroupProjectWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaGroupProjectComponent) preview: ToaGroupProjectComponent;

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
