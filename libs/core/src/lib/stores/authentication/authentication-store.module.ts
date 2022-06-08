import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationStoreEffects } from './authentication-store.effects';
import { AuthenticationStoreFacade } from './authentication-store.facade';
import {
  authenticationStoreReducer,
  AUTHENTICATION_STORE_FEATURE_KEY,
} from './authentication-store.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      AUTHENTICATION_STORE_FEATURE_KEY,
      authenticationStoreReducer
    ),
    EffectsModule.forFeature([AuthenticationStoreEffects]),
  ],
  providers: [AuthenticationStoreFacade],
})
export class AuthenticationStoreModule {}
