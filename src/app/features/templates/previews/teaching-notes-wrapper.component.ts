import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { TeachingNotesComponent } from './generic/teaching-notes.component';

@Component({
  selector: 'app-teaching-notes-wrapper',
  templateUrl: './teaching-notes-wrapper.component.html',
  styles: []
})
export class TeachingNotesWrapperComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(TeachingNotesComponent) preview: TeachingNotesComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    let html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
