import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-preview',
  template: `
    <h4>Preview:</h4>
    <div id="dialog_for_link_1" title="dialogTitle ? dialogTitle : Title" class="enhanceable_content dialog">
      {{dialogContent ? dialogContent : "dialog"}}
    </div>
    <p>
        <a id="link_1" class="Button" href="#dialog_for_link_1">
          {{dialogPrompt ? dialogPrompt : "prompt"}}
        </a>
    </p>
  `,
  styles: []
})
export class DialogPreviewComponent implements OnInit {

  @Input() dialogContent: string;
  @Input() dialogPrompt: string;

  constructor() { }

  ngOnInit() {
  }

}
