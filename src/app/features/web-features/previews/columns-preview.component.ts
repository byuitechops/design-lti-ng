import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columns-preview',
  template: `
<div class="content-box">
  <div class="grid-row">
      <div class="col-xs-6" *ngFor="let item of array(numberOfColumns)">
          <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
          </ul>
      </div>
  </div>
</div>
  `,
  styles: []
})
export class ColumnsPreviewComponent implements OnInit {

  @Input() numberOfColumns: number;

  constructor() { }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  ngOnInit() {
  }

}
