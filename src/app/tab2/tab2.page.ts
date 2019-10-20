import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  todos: any = [];

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todos = this.todoService.fetchTodos();
  }

}
