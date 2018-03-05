import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: []
})
export class DialogComponent implements OnInit {

  dialogPrompt: string;
  dialogTitle: string;
  dialogContent: string;

  constructor() { }

  ngOnInit() {
  }

}
