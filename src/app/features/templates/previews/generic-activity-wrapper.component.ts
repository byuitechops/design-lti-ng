import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { GenericActivityComponent } from './generic/generic-activity.component';

@Component({
  selector: 'app-generic-activity-wrapper',
  templateUrl: './generic-activity-wrapper.component.html',
  styles: []
})
export class GenericActivityWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(GenericActivityComponent) preview: GenericActivityComponent;

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
