import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-prepare-pre-assesment',
  templateUrl: './prepare-pre-assesment.component.html',
  styles: []
})
export class PreparePreAssesmentComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
