import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.scss']
})
export class Cmp3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigation() {
    this.router.navigate(['cmp4']);
  }

}
