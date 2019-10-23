import { Component, OnInit, HostListener } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ModalController } from '@ionic/angular';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  todos: any = [];

  constructor(
    private todoService: TodoService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTodoModalComponent,
      componentProps: {
        title: 'Title',
        description: 'Description',
        filters: 'Filters'
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        const newTodo = data['data'];
        if (newTodo === undefined) {
          return;
        } else {
          this.todoService.createTodo(newTodo).subscribe(
            data => {
              this.getTodos();
            },
            err => console.error(err),
            () => console.log('createTodos completed')
          )
        }
      });

    return await modal.present();
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
