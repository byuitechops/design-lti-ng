import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HomePagePreviewComponent } from './generic/home-page-preview.component';

@Component({
  selector: 'app-home-page-wrapper',
  templateUrl: './home-page-wrapper.component.html',
  styles: []
})
export class HomePageWrapperComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(HomePagePreviewComponent) preview: HomePagePreviewComponent;

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
