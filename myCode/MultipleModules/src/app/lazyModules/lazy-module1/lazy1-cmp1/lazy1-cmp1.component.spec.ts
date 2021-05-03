import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy1Cmp1Component } from './lazy1-cmp1.component';

describe('Lazy1Cmp1Component', () => {
  let component: Lazy1Cmp1Component;
  let fixture: ComponentFixture<Lazy1Cmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy1Cmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy1Cmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
