import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message:string) {
    console.log(message);
    this.log2();
  }
  log2() {
    console.log("log2 called");
  }

}
