import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // this pipe reverse the string
  transform(value: any): any {
    const splitValue = value.split('');
    const revrseValue = splitValue.reverse();
    const joinValue = revrseValue.join('');
    return joinValue;

  }

}
