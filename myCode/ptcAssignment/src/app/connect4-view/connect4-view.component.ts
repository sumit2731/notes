import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SquareStatus } from '../models/squareStatus';

@Component({
  selector: 'app-connect4-view',
  templateUrl: './connect4-view.component.html',
  styleUrls: ['./connect4-view.component.css'],
})
export class Connect4ViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() columnClicked = new EventEmitter<number>();
  @Input() gameArray: SquareStatus[][];

  columnClickedEvent(columnNumber) {
    this.columnClicked.emit(columnNumber);
  }
}
