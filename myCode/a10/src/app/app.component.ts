import { Component,OnChanges, DoCheck, enableProdMode, ViewChild, ElementRef } from '@angular/core';
import {Todo} from "./todo";
import {Owner} from "./owner";
import { ajax } from 'rxjs/ajax';
import {BehaviorSubject, interval,timer ,ReplaySubject, fromEvent, of,from, throwError, defer, bindCallback, Observable, concat, race,merge, ConnectableObservable, zip, forkJoin, combineLatest, Subject, Observer, empty} from 'rxjs';
import { retryWhen,retry,tap,delay, delayWhen, map, mapTo, concatMap, take,publish,mergeMap, startWith, endWith, withLatestFrom,skipWhile,find} from 'rxjs/operators'
import { EventEmitter } from 'events';
import {todos as initialData} from './test_data';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    env = environment;
    xssString = "<img src=xss onerror=alert(2)>"

    @ViewChild('sumit', {static: true}) divRefrence : ElementRef;
    f1() {
      this.divRefrence.nativeElement.innerHTML = this.xssString;
    }
}   








