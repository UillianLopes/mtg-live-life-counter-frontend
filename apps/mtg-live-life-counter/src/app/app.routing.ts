import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('@mtg-live-life-counter/features/main').then(
        (m) => m.MainFeatureModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('@mtg-live-life-counter/features/sign-in').then(
        (m) => m.SignInFeatureModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@mtg-live-life-counter/features/sign-up').then(
        (m) => m.SignUpFeatureModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
