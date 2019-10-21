import { Component, OnInit } from '@angular/core';
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
    // );s
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTodoModalComponent,
      // componentProps: {
      //   'firstName': 'Douglas',
      //   'lastName': 'Adams',
      //   'middleInitial': 'N'
      // }
      componentProps: { 
        foo: 'hello',
        bar: 'world'
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
