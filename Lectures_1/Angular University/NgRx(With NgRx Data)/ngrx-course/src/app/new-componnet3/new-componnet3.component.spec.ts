import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponnet3Component } from './new-componnet3.component';

describe('NewComponnet3Component', () => {
  let component: NewComponnet3Component;
  let fixture: ComponentFixture<NewComponnet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponnet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponnet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
