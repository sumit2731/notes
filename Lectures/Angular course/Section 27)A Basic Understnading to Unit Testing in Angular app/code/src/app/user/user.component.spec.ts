import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../data.service';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('Component: User', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [UserComponent]
      }).compileComponents();
    });
    it('shoould create the app', () => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it('should use teh user name from the service', () => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let userService = fixture.debugElement.injector.get(UserService);
      fixture.detectChanges();
      expect(userService.user.name).toEqual(app.user.name);
    });
    it('should display user name if user is logged in', () => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      app.isLoggedIn = true;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain(app.user.name);
    });
    it('should not display user name if user is not logged in', () => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
    });
    it('should fetch data if called asycnchronously',async(() => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, "getDetails")
          .and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(app.data).toBe('Data');
      });
    }));
    it('should fetch data if called asycnchronously',fakeAsync(() => {
      let fixture = TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, "getDetails")
          .and.returnValue(Promise.resolve('Data'));
      fixture.detectChanges();
     tick();
     expect(app.data).toBe('Data');
    }));
});