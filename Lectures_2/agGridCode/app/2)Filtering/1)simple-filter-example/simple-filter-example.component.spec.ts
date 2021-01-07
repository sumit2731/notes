import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilterExampleComponent } from './simple-filter-example.component';

describe('SimpleFilterExampleComponent', () => {
  let component: SimpleFilterExampleComponent;
  let fixture: ComponentFixture<SimpleFilterExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFilterExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFilterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
