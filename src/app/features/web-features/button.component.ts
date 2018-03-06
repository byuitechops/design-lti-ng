import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ButtonPreviewComponent } from './previews/button-preview.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {

  makePrimary = false;

  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ButtonPreviewComponent) preview: ButtonPreviewComponent;

  _buttonText: string;
  get buttonText(): string {
    return this._buttonText;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }

}
