import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styles: []
})
export class ImageCarouselComponent implements OnInit {

  slideCount = 0;
  slideSource: string[] = [];
  slideAlt: string[] = [];

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild('Preview') preview: ElementRef;

  constructor() { }

  chooseFeature() {
    const html = this.preview.nativeElement.outerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
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
