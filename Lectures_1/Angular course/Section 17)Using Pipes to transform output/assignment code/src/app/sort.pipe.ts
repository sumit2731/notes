import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  // this pipe sort the server objects by server name
  transform(value: any): any {
    function compare (a, b) {
      let comparison = 0;
     const name1 = a.name;
     const name2 = b.name;
     if (name1 > name2) {
        comparison = 1;
      }
      // tslint:disable-next-line:one-line
      else if (name1 < name2) {
        comparison = -1;
      }
      return comparison;
    }
    return value.sort(compare);
  }

}
