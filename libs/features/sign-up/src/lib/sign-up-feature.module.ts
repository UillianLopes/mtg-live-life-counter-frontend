import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFeatureComponent } from './sign-up-feature.component';
import { SignUpFeatureRoutingModule } from './sign-up-feature.routing';
import {
  MtgContainerModule,
  MtgFormsModule,
  MtgButtonModule,
} from '@mtg-live-life-counter/shared';

@NgModule({
  imports: [
    CommonModule,
    SignUpFeatureRoutingModule,
    MtgFormsModule,
    MtgContainerModule,
    MtgButtonModule
  ],
  declarations: [SignUpFeatureComponent],
})
export class SignUpFeatureModule {}
