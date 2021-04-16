import { Component,OnInit } from '@angular/core';
import {UsersService } from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService){}
  user1Activated = false;
  user2Activated = false;

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (id : number)=> {
        if(id ===1){
          this.user1Activated = true;
        }
        else{
          this.user2Activated = true;
        }
      }
    );
  }
  
}
