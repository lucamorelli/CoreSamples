import {Component} from '@angular/core';
import {Validators, CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, Control, FORM_PROVIDERS} from '@angular/common';


import {TodoService, Todo} from '../services/todo_service';
import {Autofocus} from '../directives/Autofocus';
import {CustomOrderByPipe} from '../pipes/CustomOrderByPipe';


@Component({
    selector: 'todo', 
    templateUrl: './views/todo.html', 
    providers: [FORM_PROVIDERS],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, Autofocus],  
    pipes: [CustomOrderByPipe] 
})
export class TodoCmp {

    todoForm: ControlGroup;

    constructor(private todoService: TodoService) { 
        this.todoForm = new ControlGroup({
            title: new Control('', Validators.required) 
        });
    }

    addOne(todo: Todo) { 
        this.todoService.addOne(todo);
        (<Control>this.todoForm.controls['title']).updateValue('');
    }

    removeOne(todo: Todo) { 
        this.todoService.removeOne(todo.id);
    }

    find(): Todo[] { 
        return this.todoService.find();
    }
} 
