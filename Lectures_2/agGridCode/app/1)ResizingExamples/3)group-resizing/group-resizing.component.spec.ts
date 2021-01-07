import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupResizingComponent } from './group-resizing.component';

describe('GroupResizingComponent', () => {
  let component: GroupResizingComponent;
  let fixture: ComponentFixture<GroupResizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupResizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupResizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
