import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { interval } from '../../../node_modules/rxjs';
import {Observable, noop, timer } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /**
     * Callback passed to create function will only be executed when we
     * subscribe to observabke that is returned
     */
    const http$ = Observable.create(observer => {
      fetch('/api/courses')
        .then(response => {
           return response.json();
        })
         .then(body => {
           observer.next(body);
           observer.complete();
         })
          .catch(err => {
            observer.error(err);
          });
    });
    
    http$.subscribe(
      courses => console.log(courses),
      noop,
      () => console.log('Completed')
    );

    timer(1000).subscribe(val => console.log(val));
  }

}
