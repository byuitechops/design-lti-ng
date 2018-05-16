import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PonderProveReflectiveWriteUpComponent } from './ponder-prove/ponder-prove-reflective-write-up.component';

@Component({
  selector: 'app-reflection-wrapper',
  templateUrl: './reflection-wrapper.component.html',
  styles: []
})
export class ReflectionWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PonderProveReflectiveWriteUpComponent) preview: PonderProveReflectiveWriteUpComponent;

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
