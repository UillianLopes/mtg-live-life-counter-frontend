import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomFeatureComponent } from './room-feature.component';
import { RoomFeatureRoutingModule } from './room-reature.routing';

@NgModule({
  imports: [CommonModule, RoomFeatureRoutingModule],
  declarations: [RoomFeatureComponent],
})
export class RoomFeatureModule {}
