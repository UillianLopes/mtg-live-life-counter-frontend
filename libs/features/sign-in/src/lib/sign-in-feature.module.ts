import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFeatureComponent } from './sign-in-feature.component';
import { SignInFeatureRoutingModule } from './sign-in-reature.routing';
import {
  MtgButtonModule,
  MtgContainerModule,
  MtgFormsModule,
} from '@mtg-live-life-counter/shared';
import { AuthenticationStoreModule } from '@mtg-live-life-counter/stores/authentication';

@NgModule({
  imports: [
    CommonModule,
    SignInFeatureRoutingModule,
    AuthenticationStoreModule,
    MtgFormsModule,
    MtgContainerModule,
    MtgButtonModule,
  ],
  declarations: [SignInFeatureComponent],
})
export class SignInFeatureModule {}
