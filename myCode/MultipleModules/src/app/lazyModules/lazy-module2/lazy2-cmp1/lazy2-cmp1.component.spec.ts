import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy2Cmp1Component } from './lazy2-cmp1.component';

describe('Lazy2Cmp1Component', () => {
  let component: Lazy2Cmp1Component;
  let fixture: ComponentFixture<Lazy2Cmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy2Cmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy2Cmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
