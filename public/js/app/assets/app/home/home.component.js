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
import { HomeService } from './home.service';
import 'rxjs/Rx';
import { Ranking } from './home.enum';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
    }
    HomeComponent_1 = HomeComponent;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.homeService.fetchUser().subscribe(function (data) {
            _this.username = data.obj.username;
            _this.passwordLength = data.obj.passwordLength;
            _this.lowercase = data.obj.lowercase;
            _this.uppercase = data.obj.uppercase;
            _this.specialChars = data.obj.specialChars;
            _this.numericValues = data.obj.numericValues;
            _this.totalScore = _this.determinePasswordScore();
            _this.outputFeedback();
            _this.outputMessage = _this.finalOutputString();
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription$.unsubscribe();
    };
    HomeComponent.prototype.determinePasswordScore = function () {
        var score = 0;
        var deduction = 0;
        for (var i = 0; i <= this.passwordLength; i++) {
            if (i > 7) {
                // Maximum score here can be only be 20
                if (i >= HomeComponent_1.MAX_ATTEMPTS_PASSWORD_LENGTH) {
                    // Break out the loop it becomes bigger than 12. 
                    // We will have already determined the top score for this part
                    continue;
                }
                else {
                    score += 5;
                }
            }
        }
        for (var j = 0; j <= this.lowercase; j++) {
            if (j >= 1) {
                if (j >= HomeComponent_1.MAX_ATTEMPTS) {
                    continue;
                }
                else {
                    score += 5;
                }
            }
        }
        for (var j = 0; j <= this.uppercase; j++) {
            if (j >= 1) {
                if (j >= HomeComponent_1.MAX_ATTEMPTS) {
                    continue;
                }
                else {
                    score += 5;
                }
            }
        }
        for (var j = 0; j <= this.specialChars; j++) {
            if (j >= 1) {
                if (j >= HomeComponent_1.MAX_ATTEMPTS) {
                    continue;
                }
                else {
                    score += 5;
                }
            }
        }
        for (var j = 0; j <= this.numericValues; j++) {
            if (j >= 1) {
                if (j >= HomeComponent_1.MAX_ATTEMPTS) {
                    continue;
                }
                else {
                    score += 5;
                }
            }
        }
        if (this.numericValues == 0) {
            deduction += 5;
        }
        if (this.uppercase == 0) {
            deduction += 5;
        }
        if (this.specialChars == 0) {
            deduction += 5;
        }
        if (this.lowercase == 0) {
            deduction += 5;
        }
        if (deduction !== 0) {
            // penality for bad variety
            return score - deduction;
        }
        return score;
    };
    HomeComponent.prototype.outputFeedback = function () {
        if (this.passwordLength < 8) {
            this.passwordLengthTextResult = Ranking.POOR;
        }
        else if (this.passwordLength >= 8 && this.passwordLength < 11) {
            this.passwordLengthTextResult = Ranking.GOOD;
        }
        else {
            this.passwordLengthTextResult = Ranking.VERY_GOOD;
        }
        if (this.lowercase == 0) {
            this.lowercaseTextResult = Ranking.POOR;
        }
        else if (this.lowercase >= 1 && this.lowercase < 4) {
            this.lowercaseTextResult = Ranking.GOOD;
        }
        else {
            this.lowercaseTextResult = Ranking.VERY_GOOD;
        }
        if (this.uppercase == 0) {
            this.uppercaseTextResult = Ranking.POOR;
        }
        else if (this.uppercase >= 1 && this.uppercase < 4) {
            this.uppercaseTextResult = Ranking.GOOD;
        }
        else {
            this.uppercaseTextResult = Ranking.VERY_GOOD;
        }
        if (this.specialChars == 0) {
            this.specialCharsTextResult = Ranking.POOR;
        }
        else if (this.specialChars >= 1 && this.specialChars < 4) {
            this.specialCharsTextResult = Ranking.GOOD;
        }
        else {
            this.specialCharsTextResult = Ranking.VERY_GOOD;
        }
        if (this.numericValues == 0) {
            this.numericValuesTextResult = Ranking.POOR;
        }
        else if (this.numericValues >= 1 && this.numericValues < 4) {
            this.numericValuesTextResult = Ranking.GOOD;
        }
        else {
            this.numericValuesTextResult = Ranking.VERY_GOOD;
        }
    };
    HomeComponent.prototype.finalOutputString = function () {
        var passwordLengthOutput;
        var lowercaseOutout;
        var uppercaseOutput;
        var specialCharsOutput;
        var numericValuesOutput;
        var finalOutput = "";
        if (this.passwordLengthTextResult === Ranking.POOR) {
            passwordLengthOutput = "your password length is poor, try to aim for 8 - 12 characters.";
        }
        else if (this.passwordLengthTextResult === "Good") {
            passwordLengthOutput = "your password length is good at " + this.passwordLength + " characters, try to aim for 12 characters or more. ";
        }
        else {
            passwordLengthOutput = "your password length is very good at " + this.passwordLength + " characters, well done!";
        }
        if (this.lowercaseTextResult === Ranking.POOR) {
            lowercaseOutout = "Number of lowercase is poor, we recommend at least 1 lowercase.";
        }
        else if (this.lowercaseTextResult === "Good") {
            lowercaseOutout = "Number of lowercase is good at " + this.lowercase + " characters, try to aim for 4 characters or more. ";
        }
        else {
            lowercaseOutout = "Number of lowercase is good at " + this.lowercase + " characters, well done!";
        }
        if (this.uppercaseTextResult === Ranking.POOR) {
            uppercaseOutput = "Number of uppercase is poor, we recommend at least 1 uppercase.";
        }
        else if (this.uppercaseTextResult === Ranking.GOOD) {
            uppercaseOutput = "Number of uppercase is good at " + this.uppercase + " characters, try to aim for 4 characters or more. ";
        }
        else {
            uppercaseOutput = "Number of uppercase is good at " + this.uppercase + " characters, well done!";
        }
        if (this.specialCharsTextResult === Ranking.POOR) {
            specialCharsOutput = "Number of special characters is poor, we recommend at least 1 special character. For example $,!,£,?,% .";
        }
        else if (this.specialCharsTextResult === Ranking.GOOD) {
            specialCharsOutput = "Number of special characters is good at " + this.specialChars + " characters, try to aim for 4 characters or more. ";
        }
        else {
            specialCharsOutput = "Number of special characters is good at " + this.specialChars + " characters, well done!";
        }
        if (this.numericValuesTextResult === Ranking.POOR) {
            numericValuesOutput = "Number of numeric values is poor, we recommend at least 1 numeric value.";
        }
        else if (this.numericValuesTextResult === Ranking.GOOD) {
            numericValuesOutput = "Number of numeric value is good at " + this.numericValues + " characters, try to aim for 4 characters or more. ";
        }
        else {
            numericValuesOutput = "Number of numeric value is good at " + this.numericValues + " characters, well done!";
        }
        finalOutput += "Hi " + this.username + ",\n         " + passwordLengthOutput + " " + lowercaseOutout + " " + uppercaseOutput + " " + specialCharsOutput + " " + numericValuesOutput;
        return finalOutput;
    };
    HomeComponent.MAX_ATTEMPTS_PASSWORD_LENGTH = 12;
    HomeComponent.MAX_ATTEMPTS = 5;
    HomeComponent = HomeComponent_1 = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [HomeService])
    ], HomeComponent);
    return HomeComponent;
    var HomeComponent_1;
}());
export { HomeComponent };
