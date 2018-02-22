import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericQuizComponent } from './generic-quiz.component';

describe('GenericQuizComponent', () => {
  let component: GenericQuizComponent;
  let fixture: ComponentFixture<GenericQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
