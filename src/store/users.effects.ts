import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from './../services/users.service';
import { usersActions } from './users.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from './model';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  usersGetAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(usersActions.getAll),
      switchMap(() => this.usersService.getAll()),
      map((user: any) => usersActions.getAllSuccess({ user: user })),
      catchError((error) => of(usersActions.getAllFailure({ error })))
    );
  });
}
