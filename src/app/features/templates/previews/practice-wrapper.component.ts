import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PracticeComponent } from './prepare/practice.component';

@Component({
  selector: 'app-practice-wrapper',
  templateUrl: './practice-wrapper.component.html',
  styles: []
})
export class PracticeWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PracticeComponent) preview: PracticeComponent;

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
