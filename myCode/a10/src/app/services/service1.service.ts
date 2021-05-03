import { Injectable } from '@angular/core';
import { Feature1Module } from '../feature1/feature1.module';

@Injectable({
  providedIn: Feature1Module
})
export class Service1Service {
  randomNumber = 0;
  constructor() { 
    this.randomNumber = Math.random();
  }
}
