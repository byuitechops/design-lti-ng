import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog-preview',
  template: `
<div id="dialog_for_link_{{date}}" title="{{dialogTitle ? dialogTitle : 'Title'}}" class="enhanceable_content dialog">
  {{dialogContent ? dialogContent : "dialog"}}
</div>
<p>
    <a class="Button" href="#dialog_for_link_{{date}}" id="{{date}}">
      {{dialogPrompt ? dialogPrompt : "prompt"}}
    </a>
</p>
  `,
  styles: []
})
export class DialogPreviewComponent implements OnInit {

  @Input() dialogContent: string;
  @Input() dialogPrompt: string;
  @Input() dialogTitle: string;

  date: number;

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
    this.date = new Date().getTime();
  }

}
