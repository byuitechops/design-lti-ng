import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ImagePreviewComponent } from './previews/image-preview.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {

  positions: string[] = ['left', 'center', 'right'];
  sizes: string[] = ['full', 'half', 'quarter'];
  imageSize = 'quarter';
  imagePosition = 'right';
  imageClearfix = false;
  imageSource: string;

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild(ImagePreviewComponent) preview: ImagePreviewComponent;

  _imageCaption: string;
  get imageCaption(): string {
    return this._imageCaption;
  }
  set imageCaption(value: string) {
    this._imageCaption = value;
  }

  _imageAlt: string;
  get imageAlt(): string {
    return this._imageAlt;
  }
  set imageAlt(value: string) {
    this._imageAlt = value;
  }

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  changeImagePosition(value: string): void {
    this.imagePosition = value;
  }

  changeImageSize(value: string): void {
    this.imageSize = value;
  }


  updateImageSource(value: string): void {
    this.imageSource = value;
  }

  ngOnInit() {
  }

}
