import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ponder-prove',
  templateUrl: './ponder-prove.component.html',
  styles: []
})
export class PonderProveComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
