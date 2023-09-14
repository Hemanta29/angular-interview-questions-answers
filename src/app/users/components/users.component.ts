import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  Observable,
  Subject,
  Subscription,
  interval,
  take,
  takeLast,
  takeUntil,
  takeWhile,
} from 'rxjs';
import { AppStateInterface } from 'src/app/appState.interface';
import { UnSub } from 'src/app/unsub.service';

import * as UsersActions from '../store/actions';
import { state } from '@angular/animations';
import { UserInterface } from '../types/users.interface';
import {
  errorSelector,
  isLoadingSelector,
  usersSelector,
} from '../store/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends UnSub implements OnInit {
  data$: Observable<number> = interval(1000);
  data2$: Observable<number> = interval(1000);
  dataSubscription?: Subscription;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<UserInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    super();
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.users$ = this.store.pipe(select(usersSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers());
    this.dataSubscription = this.data$
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((data) => {
        console.log('data', data);
      });
    this.data2$.pipe(takeUntil(this.unSubscribe$)).subscribe((data) => {
      console.log('data2', data);
    });
  }
}
