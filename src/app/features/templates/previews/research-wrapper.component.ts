import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareScholarlyResearchComponent } from './prepare/prepare-scholarly-research.component';

@Component({
  selector: 'app-research-wrapper',
  templateUrl: './research-wrapper.component.html',
  styles: []
})
export class ResearchWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareScholarlyResearchComponent) preview: PrepareScholarlyResearchComponent;

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
