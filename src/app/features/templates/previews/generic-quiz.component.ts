import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-generic-quiz',
  templateUrl: './generic-quiz.component.html',
  styleUrls: []
})
export class GenericQuizComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }

}
