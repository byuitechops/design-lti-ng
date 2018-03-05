import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: []
})
export class ButtonComponent implements OnInit {

  makePrimary = false;

  _buttonText: string;
  get buttonText(): string {
    return this._buttonText;
  }
  set buttonText(value: string) {
    this._buttonText = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
