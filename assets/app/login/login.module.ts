import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignUpComponent } from './signup/signup.component';
import { UserService } from './login.service';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar'


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpModule,
    FormsModule,
    PasswordStrengthBarModule
  ],
  declarations: [
      LoginComponent,
      LoginformComponent,
      SignUpComponent
  ],
  exports: [
      LoginComponent,
      LoginformComponent,
      SignUpComponent
    ],
  providers: []
})
export class LoginModule { }
