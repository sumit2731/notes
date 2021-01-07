import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Cmp1Component implements OnInit {
  @Input() detailsObj = {id: 10, name: "Annonumous"};
  @Input() title = "Empty Title";
  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

}
