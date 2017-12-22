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
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.user = {};
        this.barLabel = "";
    }
    SignUpComponent.prototype.onSubmit = function () {
        this.extractValues(this.user.password);
        this.userService.signup(this.user).subscribe(function (data) {
            console.log(data);
        });
    };
    SignUpComponent.prototype.extractValues = function (password) {
        this.user.uppercase = password.length - password.replace(/[A-Z]/g, '').length;
        this.user.lowercase = password.length - password.replace(/[a-z]/g, '').length;
        this.user.numericValues = password.length - password.replace(/[0-9]/g, '').length;
        this.user.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.user.passwordLength = password.length;
        // console.log("Number of uppercase: "+this.uppercase);
        // console.log("Number of lowercase: "+this.lowercase);
        // console.log("Number of numeric values: "+this.numericvalues);
        // console.log("Number of special chars: "+this.specialchars);
        // console.log("Password length: "+this.passwordLength);
    };
    SignUpComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [UserService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
