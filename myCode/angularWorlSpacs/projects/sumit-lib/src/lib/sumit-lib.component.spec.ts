import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitLibComponent } from './sumit-lib.component';

describe('SumitLibComponent', () => {
  let component: SumitLibComponent;
  let fixture: ComponentFixture<SumitLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumitLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumitLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
