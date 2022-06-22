import { CreateUserCommand } from '@mtg-live-life-counter/core';
import { createAction, props, union } from '@ngrx/store';

export enum SingUpStoreActions {
  CREATE_USER = '[Sign Up Store] Create User',
  CREATE_USER_SUCCESS = '[Sign Up Store] Create User Success',
  CREATE_USER_FAILURE = '[Sign Up Store] Create User Failure',
}

export const createUser = createAction(
  SingUpStoreActions.CREATE_USER,
  props<{ payload: Partial<CreateUserCommand> }>()
);
export const createUserSuccess = createAction(
  SingUpStoreActions.CREATE_USER_SUCCESS
);
export const createUserFailure = createAction(
  SingUpStoreActions.CREATE_USER_FAILURE,
  props<{ error: unknown }>()
);

const _signUpStoreActionsUnion = union({
  createUser,
  createUserSuccess,
  createUserFailure,
});

export type SignUpStoreActionsUnion = typeof _signUpStoreActionsUnion;
