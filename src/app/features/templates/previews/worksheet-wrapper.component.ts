import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveWorksheetWorkbookComponent } from './ponder-prove/ponder-prove-worksheet-workbook.component';

@Component({
  selector: 'app-worksheet-wrapper',
  templateUrl: './worksheet-wrapper.component.html',
  styles: []
})
export class WorksheetWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveWorksheetWorkbookComponent) preview: PonderProveWorksheetWorkbookComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }
}
