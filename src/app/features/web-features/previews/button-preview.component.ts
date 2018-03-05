import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
