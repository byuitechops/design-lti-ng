import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { PrepareConceptMatchingComponent } from './prepare/prepare-concept-matching.component';

@Component({
  selector: 'app-concept-mapping-wrapper',
  templateUrl: './concept-mapping-wrapper.component.html',
  styles: []
})
export class ConceptMappingWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareConceptMatchingComponent) preview: PrepareConceptMatchingComponent;

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
