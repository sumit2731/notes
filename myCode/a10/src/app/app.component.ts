import { Component,OnChanges, DoCheck, enableProdMode } from '@angular/core';
import {Todo} from "./todo";
import {Owner} from "./owner";
import { ajax } from 'rxjs/ajax';
import {BehaviorSubject, interval,timer ,ReplaySubject, fromEvent, of,from, throwError, defer, bindCallback, Observable, concat, race,merge, ConnectableObservable, zip, forkJoin, combineLatest, Subject, Observer, empty} from 'rxjs';
import { retryWhen,retry,tap,delay, delayWhen, map, mapTo, concatMap, take,publish,mergeMap, startWith, endWith, withLatestFrom,skipWhile,find} from 'rxjs/operators'
import { EventEmitter } from 'events';
import {todos as initialData} from './test_data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todos:Array<Todo> = initialData;
    message: string;
    callback:Function = (message) => {
        console.log("setting message...");
        this.message = message;
    };

    constructor() {

    }

    toggleFirst() {
        this.todos[0].completed = ! this.todos[0].completed;
    }

    addTodo() {
        let newTodos = this.todos.slice(0);
        newTodos.push( new Todo(1, "TODO 4", false, new Owner("John", "Doe")));
        this.todos = newTodos;
    }

    onAdd() {
        this.message = "Adding Todo ...";
        this.addTodo();
    }
}   








