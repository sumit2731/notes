import { Injectable, InjectionToken } from '@angular/core';
import {HttpClient} from '@angular//common/http';



export const SUMEET_TOKEN = new InjectionToken<string>("SUMEET_TOKEN");

export function coursesServiceProviderFactory(http:HttpClient): CoursesService {
  console.log("Factory function called");
  return new CoursesService(http);
}

@Injectable()
export class CoursesService{

  constructor(private http: HttpClient) {
    // console.log(new Date().getTime());
    // console.log("constructor called");
    this.http = http;
  }
}
