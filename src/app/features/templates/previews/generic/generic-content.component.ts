import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: []
})
export class GenericContentComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }

}
