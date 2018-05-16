import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaGroupProblemSolvingComponent } from './teach-one-another/toa-group-problem-solving.component';

@Component({
  selector: 'app-group-problem-solving-wrapper',
  templateUrl: './group-problem-solving-wrapper.component.html',
  styles: []
})
export class GroupProblemSolvingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaGroupProblemSolvingComponent) preview: ToaGroupProblemSolvingComponent;

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
