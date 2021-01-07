import { Component, OnInit, Input, Output } from '@angular/core';
import { SquareStatus } from '../models/squareStatus';

@Component({
  selector: 'app-game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.css']
})
export class GameSquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() squareStatus = SquareStatus.empty;
  @Input() row: number;
  @Input() column: number;

}
