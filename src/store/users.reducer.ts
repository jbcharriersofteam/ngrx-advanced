import { createReducer, on } from '@ngrx/store';
import { UsersState } from './model';
import { usersActions } from './users.actions';

const usersInitialState: UsersState = {
  usersList: [],
  loading: false,
};

export const usersReducer = createReducer(
  usersInitialState,
  on(usersActions.getAll, (state) => ({
    ...state,
    loading: true,
  })),
  on(usersActions.getAllSuccess, (state, { users }) => ({
    ...state,
    usersList: users,
    loading: false,
  })),
  on(usersActions.getAllFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
