import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomFeatureComponent } from './room-feature.component';
const routes: Routes = [
  {
    path: '',
    component: RoomFeatureComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('./pages/room-list').then((m) => m.RoomListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/room-create').then((m) => m.RoomCreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomFeatureRoutingModule {}
