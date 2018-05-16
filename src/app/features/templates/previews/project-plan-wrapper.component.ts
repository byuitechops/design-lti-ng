import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PrepareProjectPlanComponent } from './prepare/prepare-project-plan.component';

@Component({
  selector: 'app-project-plan-wrapper',
  templateUrl: './project-plan-wrapper.component.html',
  styles: []
})
export class ProjectPlanWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(PrepareProjectPlanComponent) preview: PrepareProjectPlanComponent;

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
