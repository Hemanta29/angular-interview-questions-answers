import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UsersService } from './users/users.service';
import { ChildComponent } from './child.component';
import { Observable, of } from 'rxjs';
import {
  animate,
  style,
  state,
  transition,
  trigger,
} from '@angular/animations';
import { FooService } from './foo/foo.service';

export interface Position {
  x: number;
  y: number;
}

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '1s ease-in',
    style({
      opacity: 1,
      color: 'red',
    })
  ),
]);

const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '1s ease-out',
    style({
      opacity: 0,
      color: 'green',
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

const fadeInOut = trigger('fadeInOut', [
  state('open', style({ opacity: 1 })),
  state('close', style({ opacity: 0 })),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut, fadeInOut],
})
export class AppComponent implements AfterViewInit {
  title: string = 'my-app';
  @ViewChild(ChildComponent, { static: true }) child?: ChildComponent;
  @ViewChild('incrementButton', { static: true })
  incrementButtonRef?: ElementRef<HTMLElement>;

  @ViewChildren(ChildComponent) children?: QueryList<ChildComponent>;
  @ViewChildren('incrementButton') incrementButtonsRef?: QueryList<
    ElementRef<HTMLElement>
  >;

  currentPage$: Observable<number> = of(1);

  isShown: boolean = true;

  person: any = {
    firstName: 'Hemanta',
    lastName: 'Dutta',
  };

  position!: Position;
  @ViewChild('element', { static: true }) element: any;
  constructor(
    private usersService: UsersService,
    private fooService: FooService,
    private zone: NgZone
  ) {
    console.log(fooService.fooConfig);
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      // console.log('users', users);
    });
  }

  ngAfterViewInit(): void {
    if (this.incrementButtonRef?.nativeElement) {
      this.incrementButtonRef.nativeElement.innerHTML = 'Briddhi';
    }

    this.incrementButtonsRef?.forEach((incrementButton) => {
      if (incrementButton?.nativeElement) {
        incrementButton.nativeElement.innerHTML = 'Briddhi';
      }
    });
  }

  increment(): void {
    this.child?.incrementCount();
    this.children?.forEach((child) => {
      child.incrementCount();
    });
  }

  decrement(): void {
    this.child?.decrementCount();
  }

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  mouseDown(event: any) {
    this.element = event.target;
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.mouseMove.bind(this));
    });
  }

  mouseMove(event: any) {
    event.preventDefault();
    this.element.setAttribute('x', event.clientX);
    this.element.setAttribute('y', event.clientY);
  }

  mouseUp(event: any) {
    this.zone.run(() => {
      this.position = {
        x: this.element.getAttribute('x'),
        y: this.element.getAttribute('y'),
      };
    });
    window.document.removeEventListener('mousemove', this.mouseMove);
  }
}
