import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AuthenticationStoreState,
  AUTHENTICATION_STORE_FEATURE_KEY,
} from './authentication-store.reducer';
import { DateTime } from 'luxon';

const authenticationStoreState =
  createFeatureSelector<AuthenticationStoreState>(
    AUTHENTICATION_STORE_FEATURE_KEY
  );

export const isUserLoadingSelector = createSelector(
  authenticationStoreState,
  ({ isUserLoading }) => isUserLoading
);

export const isAuthenticatingSelector = createSelector(
  authenticationStoreState,
  ({ isAuthenticating }) => isAuthenticating
);

export const isAuthenticationLoadingSelector = createSelector(
  authenticationStoreState,
  ({ isAuthenticationLoading }) => isAuthenticationLoading
);

export const userSelector = createSelector(
  authenticationStoreState,
  ({ user }) => user
);

export const authenticationSelector = createSelector(
  authenticationStoreState,
  ({ authentication }) => authentication
);

export const isAuthenticatedSelector = createSelector(
  authenticationSelector,
  (authentication) =>
    !!authentication && new Date(authentication.expires) > new Date()
);

export const errorSelector = createSelector(
  authenticationStoreState,
  ({ error }) => error
);
