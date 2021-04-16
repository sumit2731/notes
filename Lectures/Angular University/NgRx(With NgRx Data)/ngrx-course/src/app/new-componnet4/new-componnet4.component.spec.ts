import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponnet4Component } from './new-componnet4.component';

describe('NewComponnet4Component', () => {
  let component: NewComponnet4Component;
  let fixture: ComponentFixture<NewComponnet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponnet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponnet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
