import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styles: []
})
export class ColumnsComponent implements OnInit {

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

  ngOnInit() {
  }

}
