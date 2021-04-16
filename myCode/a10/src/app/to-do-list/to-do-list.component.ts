import { Component ,Input, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked} from '@angular/core';
//import {TodoItem} from "./todo_item";
import {Todo} from "../todo";
import { ToDoComponent } from "../to-do-component/to-do-component.component";

@Component({
    selector: 'todo-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    //directives: [ToDoComponent],
    templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent implements AfterViewChecked {

    @Input()
    todos: Array<Todo>;

    @Input()
    callback: Function;

    @Output()
    addTodo = new EventEmitter<Object>();

    clicked = false;

    onToggle(todo) {
        console.log("toggling todo..");
        todo.completed = !todo.completed;

    }

    blowup() {
        console.log("Trying to blow up change detection...");
        this.clicked = true;
        this.addTodo.emit(null);
    }

    ngAfterViewChecked() {
        if (this.callback && this.clicked) {
            console.log("changing status ...");
            this.callback(Math.random());
        }

    }

}
