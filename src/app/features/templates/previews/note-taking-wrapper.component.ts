import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PrepareNoteTakingComponent } from './prepare/prepare-note-taking.component';

@Component({
  selector: 'app-note-taking-wrapper',
  templateUrl: './note-taking-wrapper.component.html',
  styles: []
})
export class NoteTakingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareNoteTakingComponent) preview: PrepareNoteTakingComponent;

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
