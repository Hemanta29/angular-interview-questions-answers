import { NgModule } from '@angular/core';
import { UsersComponent } from './components/users.component';
import { UsersService } from './users.service';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../authGuard.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { UsersEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: mapToCanActivate([AuthGuardService]),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature( 'users', reducers ),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {}
