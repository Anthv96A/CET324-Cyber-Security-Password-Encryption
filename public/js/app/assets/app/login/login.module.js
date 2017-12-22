var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthBar } from './PasswordStrengthBar/passwordStrengthBar';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        NgModule({
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
                PasswordStrengthBar
            ],
            exports: [
                LoginComponent,
                LoginformComponent,
                SignUpComponent
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
