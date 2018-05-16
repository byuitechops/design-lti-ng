import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PreparePreAssesmentComponent } from './prepare/prepare-pre-assesment.component';

@Component({
  selector: 'app-pretest-wrapper',
  templateUrl: './pretest-wrapper.component.html',
  styles: []
})
export class PretestWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PreparePreAssesmentComponent) preview: PreparePreAssesmentComponent;

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
