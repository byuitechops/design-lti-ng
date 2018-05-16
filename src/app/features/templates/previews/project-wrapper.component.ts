import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveProjectComponent } from './ponder-prove/ponder-prove-project.component';

@Component({
  selector: 'app-project-wrapper',
  templateUrl: './project-wrapper.component.html',
  styles: []
})
export class ProjectWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveProjectComponent) preview: PonderProveProjectComponent;

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
