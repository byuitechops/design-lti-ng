import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-prepare-quiz-writing',
  templateUrl: './prepare-quiz-writing.component.html',
  styles: []
})
export class PrepareQuizWritingComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
