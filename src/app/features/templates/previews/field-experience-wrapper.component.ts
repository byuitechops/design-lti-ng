import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ToaFieldExperienceComponent } from './teach-one-another/toa-field-experience.component';

@Component({
  selector: 'app-field-experience-wrapper',
  templateUrl: './field-experience-wrapper.component.html',
  styles: []
})
export class FieldExperienceWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ToaFieldExperienceComponent) preview: ToaFieldExperienceComponent;

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
