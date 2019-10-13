import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;

  constructor(private todoService : TodoService) { 
  }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.todoTitle = " ";
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
//methods here will be like controller in .NET implementation
  }

  addTodo() : void {
    this.todoService.addTodoItem(this.todoTitle);
    this.todoTitle = '';
  }
 
}
