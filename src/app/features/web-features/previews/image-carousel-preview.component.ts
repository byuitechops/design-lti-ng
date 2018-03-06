import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-carousel-preview',
  template: `
<div class="carousel">
  <div class="slide" *ngFor="let slide of array(slideCount)">
    <img alt="{{slideAlt[slide] ? slideAlt[slide] : '...'}}"
          src="{{slideSource[slide] ? slideSource[slide] :
            'http://1.bp.blogspot.com/-66D9avcPfZo/UO2VxdfheOI/AAAAAAAAAHw/4yf3mXCbzO4/s1600/050524TaylorBldg_6743.jpg'}}">
  </div>
</div>
  `,
  styles: []
})
export class ImageCarouselPreviewComponent implements OnInit {

  @Input() slideAlt: string;
  @Input() slideCount: number;
  @Input() slideSource: string;

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  ngOnInit() {
  }

}
