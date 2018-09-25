import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-callout-preview',
  template: `
  <div class="callout"
        [ngClass]="{'left':calloutPosition==='left',
                    'center':calloutPosition==='center',
                    'right':calloutPosition==='right',
                    'quarter':calloutSize==='quarter',
                    'half':calloutSize==='half',
                    'full':calloutSize==='full',
                    'blue':color==='blue',
                    'grey':color==='grey',
                    'green':color==='green',
                    'orange':color==='orange',
                    'simple':color==='simple'}">
      <h4 class="callout-header">{{ calloutHeader ? calloutHeader :
        "Callout Header" }}
      </h4>
      <p>{{ calloutText ? calloutText :
        "This is a callout box which can be used to emphasize text." }}
      </p>
  </div>
  `,
  styles: []
})
export class CalloutPreviewComponent implements OnInit {

  @Input() calloutHeader: string;
  @Input() calloutText: string;
  @Input() calloutPosition: string;
  @Input() calloutSize: string;
  @Input() color: string;

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
