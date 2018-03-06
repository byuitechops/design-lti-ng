import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ImageCarouselPreviewComponent } from './previews/image-carousel-preview.component';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styles: []
})
export class ImageCarouselComponent implements OnInit {

  slideCount = 0;
  slideSource: string[] = [];
  slideAlt: string[] = [];

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ImageCarouselPreviewComponent) preview: ImageCarouselPreviewComponent;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  updateSlideCount(value: number): void {
    if (value <= 0) {
      this.slideCount = 0;
    } else {
      this.slideCount = value;
    }
    this.slideSource.length = this.slideCount;
    this.slideAlt.length = this.slideCount;
  }

  updateSlide(value: string, index: number): void {
    this.slideSource[index] = value;
  }

  updateSlideAlt(value: string, index: number): void {
    this.slideAlt[index] = value;
  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  ngOnInit() {
  }

}
