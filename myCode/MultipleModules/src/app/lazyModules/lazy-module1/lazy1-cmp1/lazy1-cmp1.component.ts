import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-lazy1-cmp1',
  templateUrl: './lazy1-cmp1.component.html',
  styleUrls: ['./lazy1-cmp1.component.scss']
})
export class Lazy1Cmp1Component implements OnInit {

  randomNumber = 0;
  constructor(public service1: Service1Service) {
    this.randomNumber = this.service1.randomNumber;
  }

  ngOnInit() {
  }

}
