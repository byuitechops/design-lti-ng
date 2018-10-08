import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input,
  ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef,
  OnChanges, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';

@Component({
  selector: 'app-feature-wrapper',
  template: `
    <ndc-dynamic [ndcDynamicComponent]="type"
                 [ndcDynamicOutputs]="outputs">
    </ndc-dynamic>
  `,
  styles: []
})
export class FeatureWrapperComponent {

  @Output() featureSelected = new EventEmitter<string>();
  @Input() type;

  outputs = {
    featureSelected: (feature) => this.pass(feature)
  };

  constructor() {}

  pass(feature) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }
}
