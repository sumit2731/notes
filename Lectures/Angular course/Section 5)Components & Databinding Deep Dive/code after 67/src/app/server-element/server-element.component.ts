import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 @Input() element: {type: string, name: string,content:string};
  constructor() { }

  ngOnInit() {
  }

}
