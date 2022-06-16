import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFeatureComponent } from './sign-in-feature.component';
import { SignInFeatureRoutingModule } from './sign-in-reature.routing';
import { MtgFormsModule } from '@mtg-live-life-counter/shared';

@NgModule({
  imports: [CommonModule, SignInFeatureRoutingModule, MtgFormsModule],
  declarations: [SignInFeatureComponent],
})
export class SignInFeatureModule {}
