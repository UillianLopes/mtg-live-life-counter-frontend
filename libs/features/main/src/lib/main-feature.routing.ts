import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeatureComponent } from './main-feature.component';

const routes: Routes = [
  {
    path: '',
    component: MainFeatureComponent,
    children: [
      {
        path: '',
        redirectTo: 'room',
        pathMatch: 'full',
      },
      {
        path: 'room',
        loadChildren: () => import('@mtg-live-life-counter/features/room').then((m) => m.RoomFeatureModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainFeatureRoutingModule {}
