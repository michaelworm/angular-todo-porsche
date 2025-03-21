import { Component } from '@angular/core';
import { CheckboxUpdateEventDetail, PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { ToDoItem } from './to-do.types';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [PorscheDesignSystemModule, ReactiveFormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  newTodo = new FormControl('');
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

    console.log(this.items);
  }

  deleteTodo(deleteItem: ToDoItem) {
    this.items = this.items.filter(item => item.name !== deleteItem.name);
  }

  onUpdateCheckbox({ detail: updateItem }: CustomEvent<CheckboxUpdateEventDetail>) {
    this.checkItem(updateItem);
  }

  onAddTodo() {
    const value = this.newTodo.value;

    if (value !== null && value !== '') {
      this.addItem({
        name: value,
        checked: false,
      });

      this.newTodo.setValue('');
    }
  }
}
