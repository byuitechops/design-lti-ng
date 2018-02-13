import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFeaturesComponent } from './web-features.component';

describe('WebFeaturesComponent', () => {
  let component: WebFeaturesComponent;
  let fixture: ComponentFixture<WebFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
