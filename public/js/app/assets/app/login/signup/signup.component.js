var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { SignUpAndUpdatePassword } from '../SignandUpdatePassword';
import { Router } from '@angular/router';
var SignUpComponent = /** @class */ (function (_super) {
    __extends(SignUpComponent, _super);
    function SignUpComponent(userService, router) {
        return _super.call(this, userService, router) || this;
    }
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.extractValues(this.user.password);
        this.userService.signup(this.user).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/login', 'signin']);
        });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        if (this.sub$ !== undefined) {
            this.sub$.unsubscribe();
        }
    };
    SignUpComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [UserService, Router])
    ], SignUpComponent);
    return SignUpComponent;
}(SignUpAndUpdatePassword));
export { SignUpComponent };
