import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-reflective-write-up',
  templateUrl: './ponder-prove-reflective-write-up.component.html',
  styles: []
})
export class PonderProveReflectiveWriteUpComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
