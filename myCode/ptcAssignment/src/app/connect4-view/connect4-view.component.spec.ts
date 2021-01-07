import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Connect4ViewComponent } from './connect4-view.component';

describe('GameSquareViewComponent', () => {
  let component: Connect4ViewComponent;
  let fixture: ComponentFixture<Connect4ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Connect4ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Connect4ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
