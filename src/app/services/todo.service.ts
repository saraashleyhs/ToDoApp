import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: ITodo [] = [];

  getTodoItems() {
    return this.todoList;
  }

  addTodoItem(todo: ITodo):void {
    this.todoList.push({
      id: todo.id,
      title: todo.title,
      isDone: false,
      isDoing: false,
      isEditing: false
    });
  }
}
