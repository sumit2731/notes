import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadServer(id: number)
  // tslint:disable-next-line:one-line
  {
     // complex code
    //  this.router.navigate(['/servers']);
    this.router.navigate(['/servers' , id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
    }
}
