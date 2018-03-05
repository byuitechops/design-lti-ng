import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-preview',
  template: `
<a class="Button" [ngClass]="{'Button--primary':makePrimary}">
    {{ buttonText ? buttonText : "Button" }}
</a>
  `,
  styles: []
})
export class ButtonPreviewComponent implements OnInit {

  @Input() buttonText: string;
  @Input() makePrimary: boolean;

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
