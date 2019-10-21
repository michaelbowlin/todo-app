import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2.page';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent implements OnInit {

  @Input() foo: any;
  @Input() bar: any;

  constructor(public modalController: ModalController) {

  }

  ngOnInit() {
    console.log(`${this.foo} ${this.bar}`)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
