import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Cmp1Component } from './feature1-cmp1.component';

describe('Feature1Cmp1Component', () => {
  let component: Feature1Cmp1Component;
  let fixture: ComponentFixture<Feature1Cmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Cmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Cmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
