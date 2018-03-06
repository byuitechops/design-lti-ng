import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table-preview',
  template: `
<table [ngClass]="{'table-striped':tableStriped,
'ic-Table':true}">
  <tbody>
    <tr>
      <th>Heading</th>
      <th>Heading</th>
      <th>Heading</th>
    </tr>
    <tr>
      <td>Text</td>
      <td>Text</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Text</td>
      <td>Text</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Text</td>
      <td>Text</td>
      <td>Text</td>
    </tr>
  </tbody>
</table>
  `,
  styles: []
})
export class TablePreviewComponent implements OnInit {

  @Input() tableStriped: string;


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
