import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-concept-mapping-wrapper',
  templateUrl: './concept-mapping-wrapper.component.html',
  styles: []
})
export class ConceptMappingWrapperComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareConceptMappingComponent) preview: PrepareConceptMappingComponent;

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
