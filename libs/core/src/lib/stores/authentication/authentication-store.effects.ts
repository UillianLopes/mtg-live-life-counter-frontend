import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadJsonFromLocalStorage$ } from '../../functions/load-json-from-local-storage.fn';
import { saveJsonIntoLocalStorage$ } from '../../functions/save-json-into-local-storage.fn';

import { AuthenticateResponse } from '../../models/responses';
import { UserService } from '../../services/user.service';
import {
  authenticateFailure,
  authenticateSuccess,
  AuthenticationStoreActions,
  AuthenticationStoreActionsUnion,
  loadAuthenticationFailure,
  loadAuthenticationSuccess,
  loadUserFailure,
  loadUserSuccess,
  saveAuthentication,
  saveAuthenticationFailure,
  saveAuthenticationSuccess,
} from './authentication-store.actions';
import { AuthenticationStoreFacade } from './authentication-store.facade';

@Injectable()
export class AuthenticationStoreEffects {
  public readonly loadAuthentication$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.LOAD_AUTHENTICATION),
      switchMap(() =>
        loadJsonFromLocalStorage$<AuthenticateResponse>('authentication').pipe(
          map((authentication) =>
            loadAuthenticationSuccess({ authentication })
          ),
          catchError((error) => of(loadAuthenticationFailure({ error })))
        )
      )
    )
  );

  public readonly loadUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.LOAD_USER),
      switchMap(() =>
        this._userService.user().pipe(
          map((user) => loadUserSuccess({ user })),
          catchError((error) => of(loadUserFailure({ error })))
        )
      )
    )
  );

  public readonly authenticate$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.AUTHENTICATE),
      switchMap(({ command }) =>
        this._userService.authenticate(command).pipe(
          map((authentication) => authenticateSuccess({ authentication })),
          catchError((error) => of(authenticateFailure({ error })))
        )
      )
    )
  );

  public readonly authenticateSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.AUTHENTICATE_SUCCESS),
      map(({ authentication }) => saveAuthentication({ authentication }))
    )
  );

  public readonly saveAuthentication$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.SAVE_AUTHENTICATION),
      switchMap(({ authentication }) =>
        saveJsonIntoLocalStorage$('authentication', authentication).pipe(
          map(() => saveAuthenticationSuccess()),
          catchError((error) => of(saveAuthenticationFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions<AuthenticationStoreActionsUnion>,
    private readonly _facade: AuthenticationStoreFacade,
    private readonly _userService: UserService
  ) {}
}
