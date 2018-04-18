import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ponder-presentation',
  templateUrl: './ponder-presentation.component.html',
  styles: []
})
export class PonderPresentationComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
