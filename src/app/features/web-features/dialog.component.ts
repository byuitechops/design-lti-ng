import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: []
})
export class DialogComponent implements OnInit {

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild('Preview') preview: ElementRef;

  _dialogPrompt: string;
  get dialogPrompt(): string {
    return this._dialogPrompt;
  }
  set dialogPrompt(value: string) {
    this._dialogPrompt = value;
  }

  _dialogTitle: string;
  get dialogTitle(): string {
    return this._dialogTitle;
  }
  set dialogTitle(value: string) {
    this._dialogTitle = value;
  }

  _dialogContent: string;
  get dialogContent(): string {
    return this._dialogContent;
  }
  set dialogContent(value: string) {
    this._dialogContent = value;
  }

  constructor() { }

  chooseFeature() {
    const html = this.preview.nativeElement.innerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}


