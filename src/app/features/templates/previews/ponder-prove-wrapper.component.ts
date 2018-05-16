import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveComponent } from './ponder-prove/ponder-prove.component';

@Component({
  selector: 'app-ponder-prove-wrapper',
  templateUrl: './ponder-prove-wrapper.component.html',
  styles: []
})
export class PonderProveWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveComponent) preview: PonderProveComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }
}
