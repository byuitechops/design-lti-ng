import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {

  isPrimary = false;

  @Output() featureSelected: EventEmitter<string> = new EventEmitter();
  @ViewChild('Preview') preview: ElementRef;

  _buttonText: string;
  get buttonText(): string {
    return this._buttonText;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }

  constructor() { }

  chooseFeature() {
    const html = this.preview.nativeElement.outerHTML.trim();
    console.log(html);
    this.featureSelected.emit(html);
  }

  ngOnInit() {
  }

}
