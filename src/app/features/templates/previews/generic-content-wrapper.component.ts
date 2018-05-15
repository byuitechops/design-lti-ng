import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GenericContentComponent } from './generic/generic-content.component';

@Component({
  selector: 'app-generic-content-wrapper',
  templateUrl: './generic-content-wrapper.component.html',
  styles: []
})
export class GenericContentWrapperComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(GenericContentComponent) preview: GenericContentComponent;

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
