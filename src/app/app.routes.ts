import { Routes } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'todo', component: ToDoComponent, title: 'ToDos' },
  { path: 'table', component: TableComponent, title: 'Table' },
];
