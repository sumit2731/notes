import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringButtonsAndEventsComponent } from './filtering-buttons-and-events.component';

describe('FilteringButtonsAndEventsComponent', () => {
  let component: FilteringButtonsAndEventsComponent;
  let fixture: ComponentFixture<FilteringButtonsAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringButtonsAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringButtonsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
