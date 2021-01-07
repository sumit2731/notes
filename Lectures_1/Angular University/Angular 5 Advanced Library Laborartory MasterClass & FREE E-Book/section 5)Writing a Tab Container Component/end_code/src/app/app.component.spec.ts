import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent,
  fixture: ComponentFixture<AppComponent>,
  el: DebugElement,
  tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));
    fixture.detectChanges();
  });

  it('should create the test application', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should find only one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);
  }));

  it('should find login button marked as active', async(() => {
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe('Login');
  }));

  it('should display the Login Tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.login-email'));
    expect(contactEmail).toBeTruthy();
  }));

  it('should switch to SignUp Tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[1].nativeElement.click();
    fixture.detectChanges();

    const signUpEmail = tabPanel.query(By.css('.signup-email'));
    expect(signUpEmail).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent).toBe('Sign Up');


  }));

});
