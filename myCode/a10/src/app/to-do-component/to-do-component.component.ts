import { Component, OnInit,Input,Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {Todo} from "../todo";
import { interval } from 'rxjs';

@Component({
  selector: 'todo-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './to-do-component.component.html'
  
})
export class ToDoComponent implements OnInit {

  @Input()
    todo;

    @Output()
    toggle = new EventEmitter<Object>();
    num = 0;
    int = interval(1000);

    ngOnInit() {
      // this.int.subscribe(val => {;
      //   this.num = val;
      //   console.log(this.num);
      // })
    }

    onToggle() {
        this.toggle.emit(this.todo);
    }
    // f1() {
    //   this.flag = true;
    // }

}
