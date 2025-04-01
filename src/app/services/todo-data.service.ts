import { Injectable } from '@angular/core';
import { ToDoItem } from '../to-do/to-do.types';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private todos: ToDoItem[] = [
    { name: 'Do laundry', checked: false },
    { name: 'Cook meal', checked: true },
  ];

  getTodos(): ToDoItem[] {
    return this.todos;
  }

  addTodo(item: ToDoItem): void {
    this.todos.push(item);
  }

  deleteTodo(deleteItem: ToDoItem) {
    this.todos = this.todos.filter(item => item.name !== deleteItem.name);
  }

  checkTodo(updateItem: ToDoItem) {
    this.todos = this.todos.map(item => {
      if (item.name === updateItem.name) {
        item.checked = updateItem.checked;
      }

      return item;
    });
  }
}
