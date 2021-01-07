import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.scss']
})
export class SettingProfileComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Cockpit settings ngOnit called");
  }

  ngOnDestroy() {
    console.log("Coclpit settings appDestroy called");
  }

}
