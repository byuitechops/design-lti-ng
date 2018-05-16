import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ExerciseComponent } from './ponder-prove/exercise.component';

@Component({
  selector: 'app-exercise-wrapper',
  templateUrl: './exercise-wrapper.component.html',
  styles: []
})
export class ExerciseWrapperComponent implements OnInit {

  @Input() courseClass: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  @ViewChild(ExerciseComponent) preview: ExerciseComponent;

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
