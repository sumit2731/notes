import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
customObsSubscription : Subscription;
  constructor() { }

  ngOnInit() {
    //const mynumbers = Observable.interval(1000);
    //mynumbers.subscribe(
      //(number: number) => {
   //console.log(number);
     // }
    //);
    const myObservable = Observable.create((observer: Observer<string>) =>{
              setTimeout(() =>{
                observer.next('First package');
              },2000);
               setTimeout(() =>{
                observer.next('Second package');
              },4000);
              setTimeout(() =>{
                //observer.error('This does not work');
                observer.complete();
              },5000);
              setTimeout(() =>{
                observer.next('Third package');
              },7000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) =>{console.log(data);},
      (error: string) =>{console.log(error);},
      () =>{console.log('completed');}
    );
  }
  ngOnDestroy(){
this.customObsSubscription.unsubscribe();
  }

}
