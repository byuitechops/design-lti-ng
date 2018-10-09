import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styles: []
})
export class ColumnsComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild('Preview') preview: ElementRef;

  columnNumbers: number[] = [1, 2, 3];
  numberOfColumns = 1;

  constructor() { }

  changeNumberOfColumns(value: number): void {
    this.numberOfColumns = value;
  }

  array(value: number): any[] {
    const num = Number(value);
    return Array.from(Array(num).keys());
  }

  chooseFeature() {
    const html = this.preview.nativeElement.outerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
