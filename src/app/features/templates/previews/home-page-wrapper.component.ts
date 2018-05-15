import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { HomePagePreviewComponent } from './generic/home-page-preview.component';

@Component({
  selector: 'app-home-page-wrapper',
  templateUrl: './home-page-wrapper.component.html',
  styles: []
})
export class HomePageWrapperComponent implements OnInit {


  @Input() courseClass: string;
  @Input() courseId: string;
  @Input() courseName: string;

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(HomePagePreviewComponent) preview: HomePagePreviewComponent;

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
