import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInFeatureComponent } from './sign-in-feature.component';

const routes: Routes = [
  {
    path: '',
    component: SignInFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInFeatureRoutingModule {}
