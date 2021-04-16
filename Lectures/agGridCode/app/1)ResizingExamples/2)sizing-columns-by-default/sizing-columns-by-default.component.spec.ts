import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingColumnsByDefaultComponent } from './sizing-columns-by-default.component';

describe('SizingColumnsByDefaultComponent', () => {
  let component: SizingColumnsByDefaultComponent;
  let fixture: ComponentFixture<SizingColumnsByDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingColumnsByDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingColumnsByDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
