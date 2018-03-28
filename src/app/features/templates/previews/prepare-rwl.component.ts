import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prepare-rwl',
  templateUrl: './prepare-rwl.component.html',
  styleUrls: []
})
export class PrepareReadWatchListenComponent implements OnInit {

  @Input() courseClass: string;

  constructor(private elementRef: ElementRef) { }

  getHtmlContent() {
    return this.elementRef.nativeElement.innerHTML;
  }

  ngOnInit() {
  }
}
