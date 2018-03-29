import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog-preview',
  template: `
<div id="dialog_for_link_1" title="dialogTitle ? dialogTitle : Title" class="enhanceable_content dialog">
  {{dialogContent ? dialogContent : "dialog"}}
</div>
<p>
    <a id="link_1" class="Button">
      {{dialogPrompt ? dialogPrompt : "prompt"}}
    </a>
</p>
  `,
  styles: []
})
export class DialogPreviewComponent implements OnInit {

  @Input() dialogContent: string;
  @Input() dialogPrompt: string;

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
