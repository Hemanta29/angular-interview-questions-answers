import { createReducer, on } from '@ngrx/store';
import { UsersStateInterface } from '../types/usersState.interface';
import * as UsersActions from './actions';

export const initialState: UsersStateInterface = {
  isLoading: false,
  data: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(UsersActions.getUsersSuccess, (state, actions) => ({
    ...state,
    isLoading: false,
    data: actions.users,
  })),
  on(UsersActions.getUsersFailure, (state, actions) => ({
    ...state,
    isLoading: false,
    error: actions.error,
  }))
);
