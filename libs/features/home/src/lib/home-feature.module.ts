import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeatureComponent } from './home-feature.component';
import { HomeFeatureRoutingModule } from './home-feature.routing';

@NgModule({
  imports: [CommonModule, HomeFeatureRoutingModule],
  declarations: [HomeFeatureComponent],
})
export class HomeFeatureModule {}
