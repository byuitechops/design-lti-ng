import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner-preview',
  template: `
<div class="byui" id="bannerOut">
  <h2 class="{{bannerOutValue ? bannerOutValue : 'activity caseStudy'}}">
    {{(bannerOutInner ? bannerOutInner : 'CaseStudy') | capitalize}}
  </h2>
</div>
  `,
  styles: []
})
export class BannerPreviewComponent implements OnInit {

  @Input() bannerOutValue: string;
  @Input() bannerOutInner: string;

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }

}