import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankCellsComponent } from './blank-cells.component';

describe('BlankCellsComponent', () => {
  let component: BlankCellsComponent;
  let fixture: ComponentFixture<BlankCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankCellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
