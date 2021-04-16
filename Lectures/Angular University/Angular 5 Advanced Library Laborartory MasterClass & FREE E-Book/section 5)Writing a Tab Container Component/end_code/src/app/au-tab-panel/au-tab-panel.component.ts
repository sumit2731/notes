import { Component, OnInit, ContentChildren, QueryList, AfterContentInit,
  TemplateRef, AfterViewInit, Input } from '@angular/core';
import { AuTabComponent } from 'app/au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(AuTabComponent) tabs: QueryList<AuTabComponent>;

  // @ViewChild(TemplateRef) headerTemplate: TemplateRef<any>;
  @Input() headerTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.headerTemplate);
  }
  ngAfterContentInit() {
    const selected = this.tabs.find(tab => tab.selected);
    if (!selected && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }
  selectTab(selectedTab: AuTabComponent) {
    console.log(selectedTab);
    this.tabs.forEach(tab => tab.selected = false);
    selectedTab.selected = true;
  }
  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }

}
