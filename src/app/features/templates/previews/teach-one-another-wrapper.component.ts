import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { TeachOneAnotherComponent } from './teach-one-another/teach-one-another.component';

@Component({
  selector: 'app-teach-one-another-wrapper',
  templateUrl: './teach-one-another-wrapper.component.html',
  styles: []
})
export class TeachOneAnotherWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(TeachOneAnotherComponent) preview: TeachOneAnotherComponent;

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
