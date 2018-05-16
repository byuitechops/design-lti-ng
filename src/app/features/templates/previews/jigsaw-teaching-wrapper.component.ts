import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaJigsawTeachingComponent } from './teach-one-another/toa-jigsaw-teaching.component';

@Component({
  selector: 'app-jigsaw-teaching-wrapper',
  templateUrl: './jigsaw-teaching-wrapper.component.html',
  styles: []
})
export class JigsawTeachingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaJigsawTeachingComponent) preview: ToaJigsawTeachingComponent;

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
