var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../login.service';
import { Router } from '@angular/router';
var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { username: "", password: "" };
    }
    LoginformComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.signin(this.user).subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/home');
        }, function (error) { return console.error(error); });
    };
    LoginformComponent = __decorate([
        Component({
            selector: 'app-loginform',
            templateUrl: './loginform.component.html',
            styleUrls: ['./loginform.component.css']
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], LoginformComponent);
    return LoginformComponent;
}());
export { LoginformComponent };
