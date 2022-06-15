import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFeatureComponent } from './sign-in-feature.component';
import { SignInFeatureRoutingModule } from './sign-in-reature.routing';

@NgModule({
  imports: [CommonModule, SignInFeatureRoutingModule],
  declarations: [SignInFeatureComponent],
})
export class SignInFeatureModule {}
