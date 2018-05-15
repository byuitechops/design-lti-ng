import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { IntroductionComponent } from './generic/introduction.component';

@Component({
  selector: 'app-introduction-wrapper',
  templateUrl: './introduction-wrapper.component.html',
  styles: []
})
export class IntroductionWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(IntroductionComponent) preview: IntroductionComponent;

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
