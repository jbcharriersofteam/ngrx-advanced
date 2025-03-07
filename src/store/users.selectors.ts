import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './model';

// Sélecteur de fonctionnalités
export const selectUsersState = createFeatureSelector<UsersState>('myUsers');

// Sélecteurs spécifiques
export const selectUsersList = createSelector(
  selectUsersState,
  (state: UsersState) => state.usersList
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state: UsersState) => state.loading
);
