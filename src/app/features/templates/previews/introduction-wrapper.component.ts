import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IntroductionComponent } from './generic/introduction.component';

@Component({
  selector: 'app-introduction-wrapper',
  templateUrl: './introduction-wrapper.component.html',
  styles: []
})
export class IntroductionWrapperComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(IntroductionComponent) preview: IntroductionComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    let html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
