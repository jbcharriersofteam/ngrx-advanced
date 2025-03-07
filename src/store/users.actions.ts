import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { User } from './model';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Get All': emptyProps(),
    'Get All Success': props<{ user: User }>(),
    'Get All Failure': props<{ error: any }>(),
  },
});

// export const loadUsers = createAction('[Users] Load Users');
// export const loadUserSuccess = createAction(
//   '[Users] Load User Success',
//   props<{ user: User }>()
// );
// export const loadUserFailure = createAction(
//   '[Users] Load Users Failure',
//   props<{ error: any }>()
// );
