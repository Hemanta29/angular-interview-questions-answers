import { Injectable } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class UnSub implements OnDestroy {
  unSubscribe$: Subject<void> = new Subject<void>();
  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
