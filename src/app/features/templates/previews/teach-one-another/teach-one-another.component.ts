import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-teach-one-another',
  templateUrl: './teach-one-another.component.html',
  styles: []
})
export class TeachOneAnotherComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
