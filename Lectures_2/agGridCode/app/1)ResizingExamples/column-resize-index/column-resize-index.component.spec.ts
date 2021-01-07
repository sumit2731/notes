import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnResizeIndexComponent } from './column-resize-index.component';

describe('ColumnResizeIndexComponent', () => {
  let component: ColumnResizeIndexComponent;
  let fixture: ComponentFixture<ColumnResizeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnResizeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnResizeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
