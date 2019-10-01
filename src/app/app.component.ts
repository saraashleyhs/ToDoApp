import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number;
  
constructor(
  private TodoService: TodoService,){ 
  };

  ngOnInit() {
    this.todoId = 1;
    this.todoTitle = " ";
    this.todoList = [
      {
        id: this.todoId,
        isDoing: false,
        isEditing: false,
        title: "Install Angular CLI",
        isDone: false,
      }
    ]; 
  }
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo():void {
    this.todoId++;
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      isDone: false,
      isDoing: false,
      isEditing: false,
    });
    this.todoTitle = " ";
    this.todoId++;

  }
}

