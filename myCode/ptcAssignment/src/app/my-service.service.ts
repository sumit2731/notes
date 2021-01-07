import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  result = 0;
  constructor() { 
    console.log("service constructor called");
    console.log(this.result);
  }
}
