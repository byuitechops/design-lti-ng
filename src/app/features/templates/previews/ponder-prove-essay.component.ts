import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-essay',
  templateUrl: './ponder-prove-essay.component.html',
  styles: []
})
export class PonderProveEssayComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
