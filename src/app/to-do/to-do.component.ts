import { Component, OnInit } from '@angular/core';
import { CheckboxUpdateEventDetail, PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { ToDoItem } from './to-do.types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TodoDataService } from '../services/todo-data.service';

@Component({
  selector: 'app-to-do',
  imports: [PorscheDesignSystemModule, ReactiveFormsModule, RouterLink],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent implements OnInit {
  todoForm = new FormGroup({
    newTodo: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  items: ToDoItem[] = [];

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.items = this.todoDataService.getTodos();
  }

  addItem(item: ToDoItem) {
    this.todoDataService.addTodo(item);
  }

  checkItem(updateItem: ToDoItem) {
    this.todoDataService.checkTodo(updateItem);
  }

  deleteTodo(deleteItem: ToDoItem) {
    this.todoDataService.deleteTodo(deleteItem);

    this.getTodos();
  }

  onUpdateCheckbox({ detail: updateItem }: CustomEvent<CheckboxUpdateEventDetail>) {
    this.checkItem(updateItem);
  }

  onAddTodo() {
    const { newTodo } = this.todoForm.value;

    if (this.todoForm.valid) {
      this.addItem({
        name: newTodo as string,
        checked: false,
      });

      this.todoForm.setValue({
        newTodo: '',
      });
    }
  }
}
