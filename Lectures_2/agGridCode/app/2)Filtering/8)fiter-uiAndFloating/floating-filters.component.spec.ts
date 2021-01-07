import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingFiltersComponent } from './floating-filters.component';

describe('FloatingFiltersComponent', () => {
  let component: FloatingFiltersComponent;
  let fixture: ComponentFixture<FloatingFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
