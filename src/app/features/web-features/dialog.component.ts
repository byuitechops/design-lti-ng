import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { DialogPreviewComponent } from './previews/dialog-preview.component';

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

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(DialogPreviewComponent) preview: DialogPreviewComponent;

  ngOnInit() {
  }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

}


