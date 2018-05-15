import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PrepareLearningContractComponent } from './prepare/prepare-learning-contract.component';

@Component({
  selector: 'app-learning-contract-wrapper',
  templateUrl: './learning-contract-wrapper.component.html',
  styles: []
})
export class LearningContractWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareLearningContractComponent) preview: PrepareLearningContractComponent;

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
