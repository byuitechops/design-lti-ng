import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page-preview',
  templateUrl: './home-page-preview.component.html',
  styles: []
})
export class HomePagePreviewComponent implements OnInit {

  @Input() courseClass: string;
  @Input() courseId: string;
  @Input() courseName: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }

}
