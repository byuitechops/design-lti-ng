import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { DefinitionPreviewComponent } from './previews/definition-preview.component';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styles: []
})
export class DefinitionComponent implements OnInit {

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(DefinitionPreviewComponent) preview: DefinitionPreviewComponent;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
