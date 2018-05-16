import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveEssayComponent } from './ponder-prove/ponder-prove-essay.component';

@Component({
  selector: 'app-paper-essay-wrapper',
  templateUrl: './paper-essay-wrapper.component.html',
  styles: []
})
export class PaperEssayWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveEssayComponent) preview: PonderProveEssayComponent;

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
