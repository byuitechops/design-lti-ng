import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-toa-field-experience',
  templateUrl: './toa-field-experience.component.html',
  styles: []
})
export class ToaFieldExperienceComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
