import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-lazy2-cmp1',
  templateUrl: './lazy2-cmp1.component.html',
  styleUrls: ['./lazy2-cmp1.component.scss']
})
export class Lazy2Cmp1Component implements OnInit {

  randomNumber = 0;
  constructor(public service1: Service1Service) {
    this.randomNumber = this.service1.randomNumber;
  }

  ngOnInit() {
  }

}
