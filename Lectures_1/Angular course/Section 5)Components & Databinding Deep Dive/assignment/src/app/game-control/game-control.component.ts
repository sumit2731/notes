import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  i: number =0;
  @Output() numberEmittted = new EventEmitter<number>();
  myvar;
  constructor() { }

  ngOnInit() {
    
  }
  startGame()
  {
    console.log("gamestarted");
   this.myvar= setInterval(() =>{
    this.i ++; 
    this.numberEmittted.emit(this.i);
   },1000);
  }
  
  
  stopGame()
  {
    clearInterval(this.myvar);
  }
}
