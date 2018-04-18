import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-toa-insight-sharing',
  templateUrl: './toa-insight-sharing.component.html',
  styles: []
})
export class ToaInsightSharingComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
