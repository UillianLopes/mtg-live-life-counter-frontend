import { Injectable } from '@angular/core';
import { CreateUserCommand } from '@mtg-live-life-counter/core';
import { Store } from '@ngrx/store';
import { createUser } from './sign-up-store.actions';
import { SignUpStoreState } from './sign-up-store.reducer';
import {
  errorSelector,
  isCreatingUserSelector,
} from './sign-up-store.selectors';

@Injectable()
export class SignUpStoreFacade {
  public readonly isCreatingUser$ = this._signUpStore.select(
    isCreatingUserSelector
  );

  public readonly error$ = this._signUpStore.select(errorSelector);

  constructor(private readonly _signUpStore: Store<SignUpStoreState>) {}

  public createUser(payload: Partial<CreateUserCommand>) {
    this._signUpStore.dispatch(createUser({ payload }));
  }
}
