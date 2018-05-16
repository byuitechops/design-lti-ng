import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProvePortfolioComponent } from './ponder-prove/ponder-prove-portfolio.component';

@Component({
  selector: 'app-portfolio-wrapper',
  templateUrl: './portfolio-wrapper.component.html',
  styles: []
})
export class PortfolioWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProvePortfolioComponent) preview: PonderProvePortfolioComponent;

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
