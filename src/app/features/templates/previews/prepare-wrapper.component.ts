import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareComponent } from './prepare/prepare.component';

@Component({
  selector: 'app-prepare-wrapper',
  templateUrl: './prepare-wrapper.component.html',
  styles: []
})
export class PrepareWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareComponent) preview: PrepareComponent;

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
