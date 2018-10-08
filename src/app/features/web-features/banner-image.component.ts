import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BannerPreviewComponent } from './previews/banner-preview.component';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styles: []
})
export class BannerImageComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild(BannerPreviewComponent) preview: BannerPreviewComponent;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
