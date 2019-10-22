import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from '../tab2.page';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() filters: String;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  todoForm: FormGroup;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      filters: new FormControl()
    })

  }

  onSubmit(): void {
    this.modalController.dismiss(this.todoForm.value);
  }

  dismiss(): void {
    this.modalController.dismiss();
  }
}
