import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazycmp1Component } from './lazycmp1.component';

describe('Lazycmp1Component', () => {
  let component: Lazycmp1Component;
  let fixture: ComponentFixture<Lazycmp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazycmp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazycmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
