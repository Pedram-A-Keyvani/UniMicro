import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { AuthGuardService } from '@app/auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: () => import('@app/login/login.module').then(m => m.LoginModule) },
  { path: 'contacts', loadChildren: () => import('@app/contact/contact.module').then(m => m.ContactModule) },
  { path: '404', loadChildren: () => import('@app/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', loadChildren: () => import('@app/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
