import { Injectable } from '@angular/core';
import { AuthenticateCommand } from '@mtg-live-life-counter/core';
import { Store } from '@ngrx/store';

import {
  authenticate,
  loadAuthentication,
  loadUser,
} from './authentication-store.actions';
import { AuthenticationStoreState } from './authentication-store.reducer';
import * as AuthenticationStoreSelectors from './authentication-store.selectors';

@Injectable()
export class AuthenticationStoreFacade {
  public readonly isUserLoading$ = this._store.select(
    AuthenticationStoreSelectors.isUserLoadingSelector
  );
  
  public readonly isAuthenticating$ = this._store.select(
    AuthenticationStoreSelectors.isAuthenticatingSelector
  );

  public readonly isAuthenticated$ = this._store.select(
    AuthenticationStoreSelectors.isAuthenticatedSelector
  );

  public readonly isAuthenticationLoading$ = this._store.select(
    AuthenticationStoreSelectors.isAuthenticationLoadingSelector
  );

  public readonly user$ = this._store.select(
    AuthenticationStoreSelectors.userSelector
  );

  public readonly error$ = this._store.select(
    AuthenticationStoreSelectors.errorSelector
  );
  
  public readonly authentication$ = this._store.select(
    AuthenticationStoreSelectors.authenticationSelector
  );

  constructor(private readonly _store: Store<AuthenticationStoreState>) {}

  public loadAuthentication(): void {
    this._store.dispatch(loadAuthentication());
  }

  public loadUser(): void {
    this._store.dispatch(loadUser());
  }

  public authenticate(command: Partial<AuthenticateCommand>): void {
    this._store.dispatch(authenticate({ command }));
  }
}
