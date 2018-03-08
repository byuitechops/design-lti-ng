import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion-preview',
  template: `
<h3>{{ accordionHeading ? accordionHeading : "Heading" }}</h3>
<div>
    <p>{{ accordionContent ? accordionContent : "Content" }}</p>
</div>
  `,
  styles: []
})
export class AccordionPreviewComponent implements OnInit {

  @Input() accordionHeading: string;
  @Input() accordionContent: string;
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
