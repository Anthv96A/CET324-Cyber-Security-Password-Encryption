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
import { SuccessService } from './success.service';
var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(successService) {
        this.successService = successService;
        this.display = 'none';
        this.messageSuccessClassApplied = false;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.successService.successOccured.subscribe(function (success) {
            _this.success = success;
            console.log(_this.success.message);
            _this.display = 'block';
            _this.messageSuccessClassApplied = true;
        });
    };
    SuccessComponent.prototype.successHandled = function () {
        this.display = 'none';
    };
    SuccessComponent = __decorate([
        Component({
            selector: 'app-success',
            templateUrl: './success.component.html',
            styleUrls: ['./success.component.css']
        }),
        __metadata("design:paramtypes", [SuccessService])
    ], SuccessComponent);
    return SuccessComponent;
}());
export { SuccessComponent };
