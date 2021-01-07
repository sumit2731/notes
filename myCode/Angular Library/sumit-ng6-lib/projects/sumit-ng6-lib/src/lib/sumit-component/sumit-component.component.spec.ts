import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumitComponentComponent } from './sumit-component.component';

describe('SumitComponentComponent', () => {
  let component: SumitComponentComponent;
  let fixture: ComponentFixture<SumitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
