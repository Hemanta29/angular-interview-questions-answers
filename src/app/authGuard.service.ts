import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class AuthGuardService {
  constructor(private router: Router) {}
  //   canActivate(): boolean {
  //     if (localStorage.getItem('token')) {
  //       return true;
  //     }
  //     return false;
  //   }

  canActivate(): Observable<boolean> {
    return of(true).pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
      })
    );
  }
}
