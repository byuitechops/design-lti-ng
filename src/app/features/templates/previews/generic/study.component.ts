import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styles: []
})
export class StudyComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
