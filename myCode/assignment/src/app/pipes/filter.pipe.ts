import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /**
   * @param values Array to be filtered
   * @param propertyName Property on which Array needs to be filtered
   * @param title value of property
   *
   * @Desc - Here any type is used because we want to make it generalized pipe to filter array, so that it
   * is reuseable
   */
  transform (values: any[],propertyName: string, propertyValue: string) {
    if(!propertyValue) return values;
    return values.filter(game => game?.[propertyName]?.toLowerCase().indexOf(propertyValue.toLowerCase()) != -1 );
  }
}
