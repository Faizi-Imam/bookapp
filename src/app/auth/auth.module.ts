import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    CommonModule, RouterModule, AuthRoutingModule
  ]
})
export class AuthModule { }
