import { Action, createReducer, on } from '@ngrx/store';
import { AuthenticateResponse, UserModel } from '@mtg-live-life-counter/core';

import {
  authenticate,
  authenticateFailure,
  authenticateSuccess,
  loadAuthentication,
  loadAuthenticationFailure,
  loadAuthenticationSuccess,
  loadUser,
  loadUserFailure,
  loadUserSuccess,
} from './authentication-store.actions';

export const AUTHENTICATION_STORE_FEATURE_KEY = 'authenticationStore';

export interface AuthenticationStoreState {
  isUserLoading?: boolean;
  isAuthenticating?: boolean;
  isAuthenticationLoading?: boolean;

  user?: UserModel;
  authentication?: AuthenticateResponse;
  error?: unknown;
}

export const initialState: AuthenticationStoreState = {};
export const _authenticationStoreReducer = createReducer(
  initialState,

  on(authenticate, (state) => ({
    ...state,
    isAuthenticating: true,
    error: undefined,
  })),
  on(authenticateSuccess, (state, { authentication }) => ({
    ...state,
    authentication,
    isAuthenticating: false,
  })),
  on(authenticateFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticating: false,
  })),

  on(loadAuthentication, (state) => ({
    ...state,
    isAuthenticationLoading: true,
    error: undefined,
  })),
  on(loadAuthenticationSuccess, (state, { authentication }) => ({
    ...state,
    isAuthenticationLoading: false,
    authentication,
  })),
  on(loadAuthenticationFailure, (state, { error }) => ({
    ...state,
    isAuthenticationLoading: false,
    error,
  })),

  on(loadUser, (state) => ({
    ...state,
    isUserLoading: true,
    error: undefined,
  })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    isUserLoading: false,
  })),
  on(loadUserFailure, (state, { error }) => ({
    ...state,
    error,
    isUserLoading: false,
  }))
);

export function authenticationStoreReducer(
  state: AuthenticationStoreState | undefined,
  action: Action
): AuthenticationStoreState {
  return _authenticationStoreReducer(state, action);
}
