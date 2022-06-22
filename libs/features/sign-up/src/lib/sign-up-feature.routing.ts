import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFeatureComponent } from './sign-up-feature.component';
const routes: Routes = [
  {
    path: '',
    component: SignUpFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpFeatureRoutingModule {}
