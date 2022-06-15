import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFeatureComponent } from './sign-up-feature.component';
import { SignUpFeatureRoutingModule } from './sign-up-feature.routing';

@NgModule({
  imports: [CommonModule, SignUpFeatureRoutingModule],
  declarations: [SignUpFeatureComponent],
})
export class SignUpFeatureModule {}
