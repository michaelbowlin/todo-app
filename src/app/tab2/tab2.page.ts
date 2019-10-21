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
  ) { }

  ngOnInit() {
    this.getTodos();
    // );
  }

  getTodos(): void {
    this.todoService.fetchTodos().subscribe(
      data => {
        return this.todos = data;
      },
      err => console.error(err),
      () => console.log('getTodos completed')
    );
  }
  
  deleteTodo(todoID: number): void {
    this.todoService.deleteTodo(todoID).subscribe(_ => {
      this.getTodos();
    },
      err => console.error(err),
      () => console.log('deleteTodo completed')
    )
  }


}
