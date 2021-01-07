import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoodComponent } from './sood.component';

describe('SoodComponent', () => {
  let component: SoodComponent;
  let fixture: ComponentFixture<SoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
