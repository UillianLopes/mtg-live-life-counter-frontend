import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  signUpStoreReducer,
  SIGN_UP_STORE_FEATURE_KEY,
} from './sign-up-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SignUpStoreEffects } from './sign-up-store.effects';
import { SignUpStoreFacade } from './sign-up-store.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SIGN_UP_STORE_FEATURE_KEY, signUpStoreReducer),
    EffectsModule.forFeature([SignUpStoreEffects]),
  ],
  providers: [SignUpStoreFacade],
})
export class SignUpStoreModule {}
