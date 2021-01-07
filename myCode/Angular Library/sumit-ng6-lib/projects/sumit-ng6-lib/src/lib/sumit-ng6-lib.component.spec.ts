import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitNg6LibComponent } from './sumit-ng6-lib.component';

describe('SumitNg6LibComponent', () => {
  let component: SumitNg6LibComponent;
  let fixture: ComponentFixture<SumitNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumitNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumitNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
