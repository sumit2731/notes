import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/game.model';
import { GameService } from './services/games-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  games$: Observable<Game[]>;
  gameName: string;
  sortByScore = false;

  constructor(private gamesService: GameService) {}
  
  ngOnInit() {
    this.games$ = this.gamesService.getGames();
  }
}
