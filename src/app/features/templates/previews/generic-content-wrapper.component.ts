import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { GenericContentComponent } from './generic/generic-content.component';

@Component({
  selector: 'app-generic-content-wrapper',
  templateUrl: './generic-content-wrapper.component.html',
  styles: []
})
export class GenericContentWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(GenericContentComponent) preview: GenericContentComponent;

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
