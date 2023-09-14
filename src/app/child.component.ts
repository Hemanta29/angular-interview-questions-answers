import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  count: number = 0;
  @Input() currentPage: number = 1;

  incrementCount(): void {
    this.count++;
  }
  decrementCount(): void {
    this.count--;
  }
}
