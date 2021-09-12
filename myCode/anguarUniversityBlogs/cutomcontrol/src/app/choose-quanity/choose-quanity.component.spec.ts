import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuanityComponent } from './choose-quanity.component';

describe('ChooseQuanityComponent', () => {
  let component: ChooseQuanityComponent;
  let fixture: ComponentFixture<ChooseQuanityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseQuanityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
