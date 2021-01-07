import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTextFilterComponent } from './advanced-text-filter.component';

describe('AdvancedTextFilterComponent', () => {
  let component: AdvancedTextFilterComponent;
  let fixture: ComponentFixture<AdvancedTextFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedTextFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTextFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
