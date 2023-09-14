import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodosInterface } from '../todos/todos.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input('todo') todoProps!: TodosInterface;

  checkRender() {
    console.log('Redered');
    return true;
  }
}
