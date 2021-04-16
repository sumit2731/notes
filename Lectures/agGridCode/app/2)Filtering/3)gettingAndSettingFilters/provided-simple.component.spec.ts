import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedSimpleComponent } from './provided-simple.component';

describe('ProvidedSimpleComponent', () => {
  let component: ProvidedSimpleComponent;
  let fixture: ComponentFixture<ProvidedSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
