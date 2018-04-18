import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HomePagePreviewComponent } from './previews/generic/home-page-preview.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  @Input() courseName: string;
  @Input() courseId: string;
  @Input() courseClass: string;

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(HomePagePreviewComponent) preview: HomePagePreviewComponent;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
