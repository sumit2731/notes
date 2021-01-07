import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumeetComponent } from './sumeet.component';

describe('SumeetComponent', () => {
  let component: SumeetComponent;
  let fixture: ComponentFixture<SumeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
