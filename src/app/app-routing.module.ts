import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@app/auth/auth-guard.service';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    children: [
      { path: '', loadChildren: () => import('@app/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  { path: 'auth-callback', loadChildren: () => import('@app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'contacts', loadChildren: () => import('@app/contact/contact.module').then(m => m.ContactModule), canActivate: [AuthGuardService] },
  { path: '404', loadChildren: () => import('@app/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', loadChildren: () => import('@app/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
