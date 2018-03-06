import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-definition-preview',
  template: `
<h4>Preview:</h4>
<dl>
    <dt>Term (n) </dt>
    <dd>1. Definition </dd>
</dl>
  `,
  styles: []
})
export class DefinitionPreviewComponent implements OnInit {

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
