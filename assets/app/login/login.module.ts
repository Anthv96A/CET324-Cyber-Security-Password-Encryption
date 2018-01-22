import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {HttpModule} from '@angular/http';
import {LoginComponent} from './login.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignUpComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {PasswordStrengthBar} from './PasswordStrengthBar/passwordStrengthBar';
import {ChangePasswordComponent} from "./change-password/change-password.component";


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
      LoginComponent,
      LoginformComponent,
      SignUpComponent,
      PasswordStrengthBar,
      ChangePasswordComponent
  ],
  exports: [
      LoginComponent,
      LoginformComponent,
      ChangePasswordComponent,
      SignUpComponent
    ],
  providers: []
})
export class LoginModule { }
