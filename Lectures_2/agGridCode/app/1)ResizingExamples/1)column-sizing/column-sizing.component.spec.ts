import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSizingComponent } from './column-sizing.component';

describe('ColumnSizingComponent', () => {
  let component: ColumnSizingComponent;
  let fixture: ComponentFixture<ColumnSizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnSizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
