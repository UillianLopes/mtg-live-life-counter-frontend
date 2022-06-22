import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import {
  loadJsonFromLocalStorage$,
  saveJsonIntoLocalStorage$,
  AuthenticateResponse,
  UserService,
} from '@mtg-live-life-counter/core';

import {
  authenticateFailure,
  authenticateSuccess,
  AuthenticationStoreActions,
  AuthenticationStoreActionsUnion,
  loadAuthenticationFailure,
  loadAuthenticationSuccess,
  loadUser,
  loadUserFailure,
  loadUserSuccess,
  saveAuthentication,
  saveAuthenticationFailure,
  saveAuthenticationSuccess,
} from './authentication-store.actions';
import { AuthenticationStoreFacade } from './authentication-store.facade';
import { DateTime } from 'luxon';
import { Router } from '@angular/router';

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

  public readonly loadAuthenticationSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AuthenticationStoreActions.LOAD_AUTHENTICATION_SUCCESS),
      filter(
        ({ authentication }) =>
          !!authentication && new Date(authentication.expires) > new Date()
      ),
      map(() => loadUser())
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

  public readonly saveAuthenticationSuccess$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(AuthenticationStoreActions.SAVE_AUTHENTICATION_SUCCESS),
        tap(() => this._router.navigate(['/main']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly _actions$: Actions<AuthenticationStoreActionsUnion>,
    private readonly _facade: AuthenticationStoreFacade,
    private readonly _router: Router,
    private readonly _userService: UserService
  ) {}
}
