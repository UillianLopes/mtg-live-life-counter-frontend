import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SignUpStoreState,
  SIGN_UP_STORE_FEATURE_KEY,
} from './sign-up-store.reducer';

const signUpStoreStateSelector = createFeatureSelector<SignUpStoreState>(
  SIGN_UP_STORE_FEATURE_KEY
);

export const isCreatingUserSelector = createSelector(
  signUpStoreStateSelector,
  ({ isCreatingUser }) => isCreatingUser
);

export const errorSelector = createSelector(
  signUpStoreStateSelector,
  ({ error }) => error
);
