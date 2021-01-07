import { Injectable } from '@angular/core';

@Injectable()
export class CounterService 
{
  constructor() { }
  toActive: number =0;
  toInActive: number =0;
}
