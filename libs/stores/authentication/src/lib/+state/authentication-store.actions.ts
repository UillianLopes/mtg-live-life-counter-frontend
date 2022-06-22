import {
  AuthenticateCommand,
  AuthenticateResponse,
  UserModel,
} from '@mtg-live-life-counter/core';
import { createAction, props, union } from '@ngrx/store';
export enum AuthenticationStoreActions {
  AUTHENTICATE = '[Authentication Store] Authenticate',
  AUTHENTICATE_SUCCESS = '[Authentication Store] Authenticate Success',
  AUTHENTICATE_FAILURE = '[Authentication Store] Authenticate Failure',

  LOAD_USER = '[Authentication Store] Load User',
  LOAD_USER_SUCCESS = '[Authentication Store] Load User Success',
  LOAD_USER_FAILURE = '[Authentication Store] Load User Failure',

  LOAD_AUTHENTICATION = '[Authentication Store] Load Authentication',
  LOAD_AUTHENTICATION_SUCCESS = '[Authentication Store] Load Authentication Success',
  LOAD_AUTHENTICATION_FAILURE = '[Authentication Store] Load Authentication Failure',

  SAVE_AUTHENTICATION = '[Authentication Store] Save Authentication',
  SAVE_AUTHENTICATION_SUCCESS = '[Authentication Store] Save Authentication Success',
  SAVE_AUTHENTICATION_FAILURE = '[Authentication Store] Save Authentication Failure',

  RESET_STATE = '[Authentication Store] Reset State',
}

export const loadAuthentication = createAction(
  AuthenticationStoreActions.LOAD_AUTHENTICATION
);

export const loadAuthenticationSuccess = createAction(
  AuthenticationStoreActions.LOAD_AUTHENTICATION_SUCCESS,
  props<{ authentication: AuthenticateResponse }>()
);

export const loadAuthenticationFailure = createAction(
  AuthenticationStoreActions.LOAD_AUTHENTICATION_FAILURE,
  props<{ error: unknown }>()
);

export const authenticate = createAction(
  AuthenticationStoreActions.AUTHENTICATE,
  props<{ command: Partial<AuthenticateCommand> }>()
);

export const authenticateSuccess = createAction(
  AuthenticationStoreActions.AUTHENTICATE_SUCCESS,
  props<{ authentication: AuthenticateResponse }>()
);

export const authenticateFailure = createAction(
  AuthenticationStoreActions.AUTHENTICATE_FAILURE,
  props<{ error: unknown }>()
);

export const loadUser = createAction(AuthenticationStoreActions.LOAD_USER);

export const loadUserSuccess = createAction(
  AuthenticationStoreActions.LOAD_USER_SUCCESS,
  props<{ user: UserModel }>()
);

export const loadUserFailure = createAction(
  AuthenticationStoreActions.LOAD_USER_FAILURE,
  props<{ error: unknown }>()
);

export const saveAuthentication = createAction(
  AuthenticationStoreActions.SAVE_AUTHENTICATION,
  props<{ authentication: AuthenticateResponse }>()
);

export const saveAuthenticationSuccess = createAction(
  AuthenticationStoreActions.SAVE_AUTHENTICATION_SUCCESS
);

export const saveAuthenticationFailure = createAction(
  AuthenticationStoreActions.SAVE_AUTHENTICATION_FAILURE,
  props<{ error: unknown }>()
);

export const resetState = createAction(AuthenticationStoreActions.RESET_STATE);

export const _authenticationStoreActionsUnion = union({
  authenticate,
  authenticateSuccess,
  authenticateFailure,

  loadUser,
  loadUserSuccess,
  loadUserFailure,

  loadAuthentication,
  loadAuthenticationSuccess,
  loadAuthenticationFailure,

  saveAuthentication,
  saveAuthenticationSuccess,
  saveAuthenticationFailure,

  resetState,
});

export type AuthenticationStoreActionsUnion =
  typeof _authenticationStoreActionsUnion;
