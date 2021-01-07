import { Component, OnInit, Input } from '@angular/core';
import { SquareStatus } from '../models/squareStatus';
import { Player } from '../models/players';

@Component({
  selector: 'app-connect4',
  templateUrl: './connect4.component.html',
  styleUrls: ['./connect4.component.css'],
})
export class Connect4Component implements OnInit {
  /**
   * @Desc It is 2 dimensional Array that stores the state of Board
   */
  gameArray: SquareStatus[][] = [];
  /**
   * @Desc It tells which player has made the move
   */
  playerTurn = Player.Red;

  @Input() rowCount = 6;
  @Input() columnCount = 7;
  @Input() matchCount = 4;

  ngOnInit() {
    this.initialzegameArray();
  }

  /**
   * @Desc This function sets gameArray
   * @When It is called in ngOnInit
   */
  initialzegameArray() {
    for (let rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {
      this.gameArray[rowIndex] = [];

      for (let columnIndex = 0; columnIndex < this.columnCount; columnIndex++) {
        this.gameArray[rowIndex].push(SquareStatus.empty);
      }
    }
  }

  /**
   * @when It is called when player clicks to drop ball in a column
   * @param columnNumber It is column number on which player decides to drop the ball
   * @desc It changes the state of gameArray
   */
  colunClicked(columnNumber: number) {
    let lastEmptyRowIndex = this.getEmptyRowIndex(columnNumber);
    /**
     * @Desc We enter in If block if there is atleast one row is empty in that column
     */
    if (lastEmptyRowIndex) {
      this.gameArray[lastEmptyRowIndex][columnNumber] =
        this.playerTurn == Player.Red ? SquareStatus.Red : SquareStatus.Blue;
      if (this.checkIfMatch()) setTimeout(() => this.showWinningMessage());
      else this.togglePlayerTurn();
    }
  }

  /**
   * @param columnNumber It is column number
   * @Desc It returns the last empty row number in a given column
   */
  getEmptyRowIndex(columnNumber: number) {
    let lastEmptyRowIndex;

    for (let rowNumber = this.rowCount - 1; rowNumber >= 0; rowNumber--) {
      if (this.gameArray[rowNumber][columnNumber] == SquareStatus.empty) {
        lastEmptyRowIndex = rowNumber;
        break;
      }
    }

    return lastEmptyRowIndex;
  }

  /**
   * @When It is called when user takes turn
   * @Desc It toggles the player turn
   */
  togglePlayerTurn() {
    if (this.playerTurn == Player.Blue) this.playerTurn = Player.Red;
    else this.playerTurn = Player.Blue;
  }

  /**
   * @When It is called very time player drops the ball
   * @Desc It checks whether if we have winner or not
   */
  checkIfMatch() {
    //ToDO - Combine all these functions into one fucntion and iterate in one single loop isntead of
    // using 3 separate loop
    return (this.checkRowMatch() || this.checkColumnMatch() || this.checkDiagonalMatch());
  }

  checkRowMatch() {
    for (let row = 0; row < this.rowCount; row++) {
      let matchCount = 0;
      for (let column = 0; column < this.columnCount - 1; column++) {
        if (
          this.gameArray[row][column] != SquareStatus.empty &&
          this.gameArray[row][column] == this.gameArray[row][column + 1]
        )
          matchCount++;
        else matchCount = 0;
        if (matchCount == this.matchCount - 1) return [row, column];
      }
    }
    return false;
  }

  checkColumnMatch() {
    for (let column = 0; column < this.columnCount; column++) {
      let matchCount = 0;
      for (let row = 0; row < this.rowCount - 1; row++) {
        if (
          this.gameArray[row][column] != SquareStatus.empty &&
          this.gameArray[row][column] == this.gameArray[row + 1][column]
        )
          matchCount++;
        else matchCount = 0;
        if (matchCount == this.matchCount - 1) return [row, column];
      }
    }
    return false;
  }

  checkDiagonalMatch() {
    for (let row = 0; row < this.rowCount; row++) {
      for (let column =0; column < this.columnCount; column++) {

        //top right
        //(row, column)(row-1,column+1)(row-2,column+2)(row-3,column+3)
        if ( (row - (this.matchCount - 1) >= 0) && (column + (this.matchCount - 1) < this.columnCount) ) {
          if (this.gameArray[row][column] != SquareStatus.empty) {
            let matchingCount = 0;
            let index = 1;
            while (index < this.matchCount) {
              if (this.gameArray[row][column] == this.gameArray[row - index][column + index]) matchingCount++;
              else break;
              if (matchingCount == this.matchCount-1) {
                return true;
              }
              index++;
            }
          }
        }
        //bottom right
         //(row,colum) (row+1, colmun+1) (row+2, colmun+2) (row+3, colmun+3)
        if ( (row + (this.matchCount - 1) < this.rowCount) && (column + (this.matchCount - 1) < this.columnCount)) {
          if(this.gameArray[row][column] != SquareStatus.empty) {
            let matchingCount = 0;
            let index = 1;
            while(index < this.matchCount) {
              if (this.gameArray[row][column] == this.gameArray[row + index][column + index])matchingCount++;
              else break;
              if (matchingCount == this.matchCount-1) return true;
              index++;
            }
          }
        }

        //top left diagonal
        /* if ((row -(this.matchCount-1) >= 0) && (column -(this.matchCount-1) >= 0)) {}
        
        //bottom left diagonal
        if((row + (this.matchCount-1) < this.rowCount) && (column -(this.matchCount-1) >= 0)) {} */
      }
    }
    return false;
  }

  showWinningMessage() {
    let player = this.playerTurn == Player.Red ? 'Red' : 'Blue';
    alert(`${player} Player Won`);
    this.initialzegameArray();
  }

  //(row, column)(row-1,column+1)(row-2,column+2)(row-3,column+3)
  checkForTopRight(row: number, column: number) {}
}
