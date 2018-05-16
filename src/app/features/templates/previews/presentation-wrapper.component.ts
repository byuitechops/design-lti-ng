import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaPresentationComponent } from './teach-one-another/toa-presentation.component';

@Component({
  selector: 'app-presentation-wrapper',
  templateUrl: './presentation-wrapper.component.html',
  styles: []
})
export class PresentationWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaPresentationComponent) preview: ToaPresentationComponent;

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
