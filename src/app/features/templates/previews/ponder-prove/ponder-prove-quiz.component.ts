import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-quiz',
  templateUrl: './ponder-prove-quiz.component.html',
  styles: []
})
export class PonderProveQuizComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
