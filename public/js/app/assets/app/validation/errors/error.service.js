var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, EventEmitter } from '@angular/core';
import { Error } from './error.model';
var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOccured = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    };
    ErrorService = __decorate([
        Injectable()
    ], ErrorService);
    return ErrorService;
}());
export { ErrorService };
