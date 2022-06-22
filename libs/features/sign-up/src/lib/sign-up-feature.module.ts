import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFeatureComponent } from './sign-up-feature.component';
import { SignUpFeatureRoutingModule } from './sign-up-feature.routing';
import {
  MtgContainerModule,
  MtgFormsModule,
  MtgButtonModule,
  MtgHeaderModule,
} from '@mtg-live-life-counter/shared';
import { SignUpStoreModule } from '@mtg-live-life-counter/stores/sign-up';

@NgModule({
  imports: [
    CommonModule,
    SignUpFeatureRoutingModule,
    MtgFormsModule,
    MtgContainerModule,
    MtgButtonModule,
    SignUpStoreModule,
    MtgHeaderModule,
  ],
  declarations: [SignUpFeatureComponent],
})
export class SignUpFeatureModule {}
