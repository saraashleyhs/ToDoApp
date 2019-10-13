import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
    this.addTodoItem('Learn Typescript');
   }

  todoList: ITodo [] = [];
  id = 0;

  getTodoItems() {
    return this.todoList;
  }

  addTodoItem(title : string):void {
    this.todoList.push({
      id: this.id,
      title,
      isDone: false,
      isDoing: false,
      isEditing: false
    });
    this.id ++ ;
  }

  deleteToDoItem(todo: ITodo){
    console.log("delete methods was called in todo.services" + todo)
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index,1);
  }


}
