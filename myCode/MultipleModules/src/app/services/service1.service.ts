import { Injectable } from '@angular/core';
import { Feature1Module } from '../feature1/feature1.module';
import { LazyModule1Module } from '../lazyModules/lazy-module1/lazy-module1.module';
import { LazyModule2Module } from '../lazyModules/lazy-module2/lazy-module2.module';

@Injectable({
  providedIn: LazyModule1Module
})
export class Service1Service {
  randomNumber;
  constructor() {
    this.randomNumber = Math.random();
   }
}
