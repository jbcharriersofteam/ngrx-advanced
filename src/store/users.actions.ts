import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from './model';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Get All': emptyProps(),
    'Get All Success': props<{ users: User[] }>(),
    'Get All Failure': props<{ error: any }>(),
  },
});
