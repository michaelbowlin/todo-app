import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  todos: any = [];
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
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
