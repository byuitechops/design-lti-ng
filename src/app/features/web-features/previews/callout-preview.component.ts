import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-callout-preview',
  template: `
    <p>At vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
    augue duis dolore te feugait nulla
    <span id="calloutOut" class="quarter">
        <span class="pad-box-mini border border-trbl border-round"
              [ngClass]="{'left':calloutPosition==='left',
                          'center':calloutPosition==='center',
                          'right':calloutPosition==='right',
                          'quarter':calloutSize==='quarter',
                          'half':calloutSize==='half',
                          'full':calloutSize==='full',
                          'shaded':calloutChecked}">
            <em>{{ calloutText ? calloutText :
              "This is a callout box which can be used to emphasize text." }}
            </em>
        </span>
    </span>
    facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
    consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
    odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
    facilisi.
  </p>
  `,
  styles: []
})
export class CalloutPreviewComponent implements OnInit {

  @Input() calloutText: string;
  @Input() calloutPosition: string;
  @Input() calloutSize: string;
  @Input() calloutChecked: string;

  constructor() { }

  ngOnInit() {
  }

}
