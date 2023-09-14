import { Component } from '@angular/core';
import { TodosInterface } from './todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: TodosInterface[] = [
    {
      id: '1',
      text: 'First Todo',
      isCompleted: true,
    },
    {
      id: '2',
      text: 'Second Todo',
      isCompleted: true,
    },
  ];
  changeText() {
    console.log('Change text');
  }
  changeArray() {
    this.todos[0] = {
      ...this.todos[0],
      text: 'Changed Text',
    };
  }
}
