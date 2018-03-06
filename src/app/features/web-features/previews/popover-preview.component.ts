import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popover-preview',
  template: `
<a data-tooltip='{"tooltipClass":"popover popover-padded", "position":"right"}' title="{{popoverText ? popoverText : 'Ohai'}}">
  {{popoverBaseText ? popoverBaseText : "Text with accessible popover"}}
</a>
  `,
  styles: []
})
export class PopoverPreviewComponent implements OnInit {

  @Input() popoverBaseText: string;
  @Input() popoverText: string;

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
