import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveReportComponent } from './ponder-prove/ponder-prove-report.component';

@Component({
  selector: 'app-report-wrapper',
  templateUrl: './report-wrapper.component.html',
  styles: []
})
export class ReportWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveReportComponent) preview: PonderProveReportComponent;

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
