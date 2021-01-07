import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringIndexComponent } from './filtering-index.component';

describe('FilteringIndexComponent', () => {
  let component: FilteringIndexComponent;
  let fixture: ComponentFixture<FilteringIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
