import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericActivityComponent } from './generic-activity.component';

describe('GenericActivityComponent', () => {
  let component: GenericActivityComponent;
  let fixture: ComponentFixture<GenericActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
