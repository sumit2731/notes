import { Component, OnInit,Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  // @Input() title;
  // @Input() rname;
  // @Input() occupation;
  // @Input() location;
  // @Input() first;
  // @Input() custumUser = {name: "name1", id: 12}
  // @Output() display = new EventEmitter<any>();

  ngOnInit(): void {
  }

  showInfo() {
  // this.display.emit(
  //   `Name: ${this.rname}
  //   Occupation: ${this.occupation}
  //   Based In: ${this.location}
  //   First Appearance: ${this.first}`
  //   );
  }

}
