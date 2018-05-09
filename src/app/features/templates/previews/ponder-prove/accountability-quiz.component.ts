import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accountability-quiz',
  templateUrl: './accountability-quiz.component.html',
  styles: []
})
export class AccountabilityQuizComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
