import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-toa-presentation',
  templateUrl: './toa-presentation.component.html',
  styles: []
})
export class ToaPresentationComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
