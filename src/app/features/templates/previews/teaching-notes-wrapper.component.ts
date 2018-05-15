import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { TeachingNotesComponent } from './generic/teaching-notes.component';

@Component({
  selector: 'app-teaching-notes-wrapper',
  templateUrl: './teaching-notes-wrapper.component.html',
  styles: []
})
export class TeachingNotesWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(TeachingNotesComponent) preview: TeachingNotesComponent;

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
