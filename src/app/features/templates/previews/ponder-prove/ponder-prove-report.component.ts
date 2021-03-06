import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-report',
  templateUrl: './ponder-prove-report.component.html',
  styles: []
})
export class PonderProveReportComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
