var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Bootstrap component
import { AppComponent } from './app.component';
import { ErrorComponent } from './validation/errors/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserService } from './login/login.service';
import { AuthGuard } from './auth.guard';
import { ErrorService } from './validation/errors/error.service';
import { SuccessComponent } from './validation/success/success.component';
import { SuccessService } from './validation/success/success.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ErrorComponent,
                SuccessComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                FormsModule,
                AppRoutingModule,
                HomeModule,
                LoginModule,
            ],
            providers: [
                UserService,
                AuthGuard,
                ErrorService,
                SuccessService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
