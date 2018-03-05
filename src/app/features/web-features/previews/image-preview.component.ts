import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  template: `
    <img src="{{imageSource ? imageSource :
      'http://1.bp.blogspot.com/-66D9avcPfZo/UO2VxdfheOI/AAAAAAAAAHw/4yf3mXCbzO4/s1600/050524TaylorBldg_6743.jpg'}}"
      alt="{{imageAlt ? imageAlt : '...'}}"
      [ngClass]="{'left':imagePosition==='left',
      'center':imagePosition==='center',
      'right':imagePosition==='right',
      'quarter':imageSize==='quarter',
      'half':imageSize==='half',
      'full':imageSize==='full',
      'clearfix':imageClearfix}">
    <span class="caption">{{imageCaption ? imageCaption : "Image Caption"}}</span>
  `,
  styles: []
})
export class ImagePreviewComponent implements OnInit {

  @Input() imageCaption: string;
  @Input() imageSource: string;
  @Input() imageAlt: string;
  @Input() imagePosition: string;
  @Input() imageSize: string;
  @Input() imageClearfix: string;

  constructor() { }

  ngOnInit() {
  }

}
