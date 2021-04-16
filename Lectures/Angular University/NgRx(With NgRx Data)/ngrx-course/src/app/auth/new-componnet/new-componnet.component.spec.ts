import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponnetComponent } from './new-componnet.component';

describe('NewComponnetComponent', () => {
  let component: NewComponnetComponent;
  let fixture: ComponentFixture<NewComponnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
