import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAPIComponent } from './filter-api.component';

describe('FilterAPIComponent', () => {
  let component: FilterAPIComponent;
  let fixture: ComponentFixture<FilterAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
