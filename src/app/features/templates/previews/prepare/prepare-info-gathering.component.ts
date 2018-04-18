import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-prepare-info-gathering',
  templateUrl: './prepare-info-gathering.component.html',
  styles: []
})
export class PrepareInfoGatheringComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
