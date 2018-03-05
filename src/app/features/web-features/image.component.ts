import { Component, OnInit } from '@angular/core';

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
