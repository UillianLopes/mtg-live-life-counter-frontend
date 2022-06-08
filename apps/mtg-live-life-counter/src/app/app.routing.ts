import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./pages/main').then((m) => m.MainModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in').then((m) => m.SignInModule),
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-up').then((m) => m.SignUpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
