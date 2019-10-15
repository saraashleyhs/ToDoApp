import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { ITodo } from "../interfaces/itodo";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  title = "Todos";
  todoList: ITodo[] = [];
  //filteredTodos: ITodo[] = [];
  todoTitle: string;

  constructor(
    private activatedroute: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    //this.todoList = this.todoService.todoList;
    this.todoTitle = " ";
    this.activatedroute.paramMap.subscribe(params => {
      const status = this.activatedroute.snapshot.paramMap.get("status");
      console.log(status);
      if (!status) {
        this.todoList = this.todoService.todoList;
      } else if (status === "done") {
        this.todoList = this.todoService.todoList.filter(x => x.isDone);
      } else {
        this.todoList = this.todoService.todoList.filter(x => !x.isDone);
      }
    });
  }
  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
    //methods here will be like controller in .NET implementation
  }

  addTodo(): void {
    this.todoService.addTodoItem(this.todoTitle);
    this.todoTitle = "";
  }
  toggleDone(todo: ITodo) {
    this.todoService.toggleDone(todo);
  }
}
