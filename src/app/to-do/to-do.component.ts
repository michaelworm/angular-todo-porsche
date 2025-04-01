import { Component } from '@angular/core';
import { CheckboxUpdateEventDetail, PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { ToDoItem } from './to-do.types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [PorscheDesignSystemModule, ReactiveFormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  todoForm = new FormGroup({
    newTodo: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  items: ToDoItem[] = [
    { name: 'Do laundry', checked: false },
    { name: 'Cook meal', checked: true },
  ];

  addItem(item: ToDoItem) {
    this.items.push(item);
  }

  checkItem(updateItem: ToDoItem) {
    this.items = this.items.map(item => {
      if (item.name === updateItem.name) {
        item.checked = updateItem.checked;
      }

      return item;
    });
  }

  deleteTodo(deleteItem: ToDoItem) {
    this.items = this.items.filter(item => item.name !== deleteItem.name);
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
