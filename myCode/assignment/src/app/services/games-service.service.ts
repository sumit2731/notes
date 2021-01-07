import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getGames():Observable<Game[]> {
    return this.httpClient.get<Game[]>('./assets/games.json').pipe();
  }
}
