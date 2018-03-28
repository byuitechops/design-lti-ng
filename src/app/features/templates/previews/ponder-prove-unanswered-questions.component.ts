import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ponder-prove-unanswered-questions',
  templateUrl: './ponder-prove-unanswered-questions.component.html',
  styles: []
})
export class PonderProveUnansweredQuestionsComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
