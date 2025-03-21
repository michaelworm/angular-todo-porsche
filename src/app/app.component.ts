import { Component } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
  selector: 'app-root',
  imports: [ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo';
}
