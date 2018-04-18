import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-generic-activity',
  templateUrl: './generic-activity.component.html',
  styleUrls: []
})
export class GenericActivityComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }

}
