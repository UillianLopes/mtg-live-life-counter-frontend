import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatureComponent } from './main-feature.component';
import { MainFeatureRoutingModule } from './main-feature.routing';

@NgModule({
  imports: [CommonModule, MainFeatureRoutingModule],
  declarations: [MainFeatureComponent],
})
export class MainFeatureModule {}
