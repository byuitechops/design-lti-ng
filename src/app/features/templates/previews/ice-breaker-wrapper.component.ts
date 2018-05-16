import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaIcebreakerComponent } from './teach-one-another/toa-icebreaker.component';

@Component({
  selector: 'app-ice-breaker-wrapper',
  templateUrl: './ice-breaker-wrapper.component.html',
  styles: []
})
export class IceBreakerWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaIcebreakerComponent) preview: ToaIcebreakerComponent;

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
