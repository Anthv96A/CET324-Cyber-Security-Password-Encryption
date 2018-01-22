var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from '../validation/errors/error.service';
import { SuccessService } from '../validation/success/success.service';
var UserService = /** @class */ (function () {
    //   private url = 'http://localhost:3000/';
    function UserService(http, errorService, successService) {
        var _this = this;
        this.http = http;
        this.errorService = errorService;
        this.successService = successService;
        this.url = 'https://cet324-deployment.herokuapp.com/';
        this.extractData = function (res) {
            _this.successService.handleSuccess(res.json());
            var body = res.json();
            return body;
        };
        this.catchException = function (err) {
            _this.errorService.handleError(err.json());
            var error = Observable.throw(err.json());
            return error;
        };
    }
    UserService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + "user/", body, { headers: headers })
            .map(this.extractData).catch(this.catchException);
    };
    UserService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.url + "user/signin", body, { headers: headers })
            .map(function (data) { return data.json(); }).catch(this.catchException);
    };
    UserService.prototype.changePassword = function (user) {
        var body = this.convert(user);
        return this.http.put(this.url + "user/" + user.username, body)
            .map(this.extractData)
            .catch(this.catchException);
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
    };
    UserService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    UserService.prototype.convert = function (body) {
        var copy = Object.assign({}, body);
        return copy;
    };
    ;
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http,
            ErrorService,
            SuccessService])
    ], UserService);
    return UserService;
}());
export { UserService };
