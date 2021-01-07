import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMatchingComponent } from './array-matching.component';

describe('ArrayMatchingComponent', () => {
  let component: ArrayMatchingComponent;
  let fixture: ComponentFixture<ArrayMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
