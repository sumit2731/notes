import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMatchingComponent } from './group-matching.component';

describe('GroupMatchingComponent', () => {
  let component: GroupMatchingComponent;
  let fixture: ComponentFixture<GroupMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
