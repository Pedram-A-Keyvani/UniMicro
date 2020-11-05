import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from '@app/auth/auth-callback/auth-callback.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
