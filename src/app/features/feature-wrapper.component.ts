import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input,
  ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef,
  OnChanges, AfterViewInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feature-wrapper',
  template: `
    <ng-container *ngComponentOutlet="type" (select)="pass($event)" ngOutletInjector=""></ng-container>
  `,
  styles: []
})
export class FeatureWrapperComponent {

  @Input() type;
  @Output() select: EventEmitter<string> = new EventEmitter();

  constructor() { }

  pass(feature) {
    console.log('pass');
    this.select.emit(feature);
  }
}
