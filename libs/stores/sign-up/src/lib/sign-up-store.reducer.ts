import { Action, createReducer, on } from '@ngrx/store';

import {
  createUser,
  createUserFailure,
  createUserSuccess,
} from './sign-up-store.actions';

export const SIGN_UP_STORE_FEATURE_KEY = 'singUpStore';

export interface SignUpStoreState {
  isCreatingUser: boolean;
  error?: unknown;
}

const initialState: SignUpStoreState = {
  isCreatingUser: false,
};

const _signUpStoreReducer = createReducer(
  initialState,
  on(createUser, (state) => ({ ...state, isCreatingUser: true })),
  on(createUserSuccess, (state) => ({ ...state, isCreatingUser: false })),
  on(createUserFailure, (state, { error }) => ({
    ...state,
    error,
    isCreatingUser: false,
  }))
);

export function signUpStoreReducer(
  state: SignUpStoreState | undefined,
  action: Action
) {
  return _signUpStoreReducer(state, action);
}
