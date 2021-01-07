import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(games: any[], propertyName: string, sort: boolean): any[] {
    if (!sort) return games;
    return games.sort((game1,game2) => game2[propertyName] - game1[propertyName]);
  }
}
