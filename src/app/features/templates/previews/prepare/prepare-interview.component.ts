import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-prepare-interview',
  templateUrl: './prepare-interview.component.html',
  styles: []
})
export class PrepareInterviewComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
