import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@mtg-live-life-counter/core';
import { ToastService } from '@mtg-live-life-counter/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, tap, delay } from 'rxjs';
import {
  createUserFailure,
  createUserSuccess,
  SignUpStoreActionsUnion,
} from './sign-up-store.actions';
import { SingUpStoreActions } from './sign-up-store.actions';

@Injectable()
export class SignUpStoreEffects {
  public readonly createUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(SingUpStoreActions.CREATE_USER),
      switchMap(({ payload }) =>
        this._userService.create(payload).pipe(
          map(() => createUserSuccess()),
          catchError((error) => of(createUserFailure({ error })))
        )
      )
    )
  );

  public readonly createUserSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(SingUpStoreActions.CREATE_USER_SUCCESS),
        tap(() =>
          this._toastService.open(
            'Success',
            'User created with success',
            'success'
          )
        ),
        delay(1000),
        tap(() => this._router.navigate(['/sign-in']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router,
    private readonly _toastService: ToastService,
    private readonly _actions$: Actions<SignUpStoreActionsUnion>
  ) {}
}
