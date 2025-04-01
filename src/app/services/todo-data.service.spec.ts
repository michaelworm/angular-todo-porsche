import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add todo', () => {
    service.addTodo({
      name: 'Test todo',
      checked: false,
    });

    expect(service.getTodos()).toEqual([
      { name: 'Do laundry', checked: false },
      { name: 'Cook meal', checked: true },
      { name: 'Test todo', checked: false },
    ]);
  });
});
