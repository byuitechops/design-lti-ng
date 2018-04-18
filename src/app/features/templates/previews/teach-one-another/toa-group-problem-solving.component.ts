import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-toa-group-problem-solving',
  templateUrl: './toa-group-problem-solving.component.html',
  styles: []
})
export class ToaGroupProblemSolvingComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
