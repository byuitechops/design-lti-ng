import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-worksheet-workbook',
  templateUrl: './ponder-prove-worksheet-workbook.component.html',
  styles: []
})
export class PonderProveWorksheetWorkbookComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
