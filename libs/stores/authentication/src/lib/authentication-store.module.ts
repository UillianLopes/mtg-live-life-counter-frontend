import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationStoreEffects } from './+state/authentication-store.effects';
import { AuthenticationStoreFacade } from './+state/authentication-store.facade';
import {
  authenticationStoreReducer,
  AUTHENTICATION_STORE_FEATURE_KEY,
} from './+state/authentication-store.reducer';

import { AuthInterceptor } from './interceptors';

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
export class AuthenticationStoreModule {
  static forRoot(): ModuleWithProviders<AuthenticationStoreModule> {
    return {
      ngModule: AuthenticationStoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    };
  }
}
