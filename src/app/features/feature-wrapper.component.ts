import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input,
  ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-feature-wrapper',
  template: `
    <div #target></div>
  `,
  styles: []
})
export class FeatureWrapperComponent implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() type;
  cmpRef: ComponentRef<any>;
  private isViewInitialized = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
    private cdRef: ChangeDetectorRef) { }

    updateComponent() {
      if (!this.isViewInitialized) {
        return;
      }
      if (this.cmpRef) {
        this.cmpRef.destroy();
      }

      const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
      this.cmpRef = this.target.createComponent(factory);
      // to access the created instance use
      // this.compRef.instance.someProperty = 'someValue';
      // this.compRef.instance.someOutput.subscribe(val => doSomething());
      this.cdRef.detectChanges();
    }

    ngOnChanges() {
      this.updateComponent();
    }

    ngAfterViewInit() {
      this.isViewInitialized = true;
      this.updateComponent();
    }

    ngOnDestroy() {
      if (this.cmpRef) {
        this.cmpRef.destroy();
      }
    }
}
