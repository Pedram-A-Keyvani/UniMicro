import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';



@NgModule({
  declarations: [AuthCallbackComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
