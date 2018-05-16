import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareSignUpComponent } from './prepare/prepare-sign-up.component';

@Component({
  selector: 'app-sign-up-wrapper',
  templateUrl: './sign-up-wrapper.component.html',
  styles: []
})
export class SignUpWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareSignUpComponent) preview: PrepareSignUpComponent;

  showAsHtml = false;

  constructor() { }

  chooseFeature() {
    const html = this.preview.getHtmlContent().trim();
    console.log(html);
    this.select.emit(html);
  }

  ngOnInit() {
  }
}
