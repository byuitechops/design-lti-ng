import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TablePreviewComponent } from './previews/table-preview.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild(TablePreviewComponent) preview: TablePreviewComponent;

  tableStriped = false;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
