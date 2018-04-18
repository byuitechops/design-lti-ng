import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-toa-structured-debate',
  templateUrl: './toa-structured-debate.component.html',
  styles: []
})
export class ToaStructuredDebateComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
