var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ChangePasswordComponent } from "./change-password/change-password.component";
var routes = [
    { path: '', redirectTo: '/login/signin', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, children: [
            { path: 'signup', component: SignUpComponent },
            { path: 'signin', component: LoginformComponent },
            { path: 'change', component: ChangePasswordComponent }
        ] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(routes)
            ],
            declarations: [],
            exports: [RouterModule]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
export { LoginRoutingModule };
