import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticateCommand } from '../../models/commands';

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

  public authenticate(command: AuthenticateCommand): void {
    this._store.dispatch(authenticate({ command }));
  }
}
