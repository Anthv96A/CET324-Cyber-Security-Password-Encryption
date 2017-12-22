var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var PasswordStrengthBar = /** @class */ (function () {
    function PasswordStrengthBar() {
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBar_1 = PasswordStrengthBar;
    PasswordStrengthBar.measureStrength = function (p) {
        var _force = 0;
        var _regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var _lowerLetters = /[a-z]+/.test(p);
        var _upperLetters = /[A-Z]+/.test(p);
        var _numbers = /[0-9]+/.test(p);
        var _symbols = _regex.test(p);
        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
        var _passedMatches = 0;
        for (var _i = 0, _flags_1 = _flags; _i < _flags_1.length; _i++) {
            var _flag = _flags_1[_i];
            _passedMatches += _flag === true ? 1 : 0;
        }
        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        _force += _passedMatches * 10;
        // penality (short password)
        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;
        // penality (poor variety of characters)
        _force = (_passedMatches === 1) ? Math.min(_force, 10) : _force;
        _force = (_passedMatches === 2) ? Math.min(_force, 20) : _force;
        _force = (_passedMatches === 3) ? Math.min(_force, 40) : _force;
        return _force;
    };
    PasswordStrengthBar.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return {
            idx: idx + 1,
            col: this.colors[idx]
        };
    };
    PasswordStrengthBar.prototype.ngOnChanges = function (changes) {
        var password = changes['passwordToCheck'].currentValue;
        this.setBarColors(5, '#DDD');
        if (password) {
            var c = this.getColor(PasswordStrengthBar_1.measureStrength(password));
            this.setBarColors(c.idx, c.col);
        }
    };
    PasswordStrengthBar.prototype.setBarColors = function (count, col) {
        for (var _n = 0; _n < count; _n++) {
            this['bar' + _n] = col;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PasswordStrengthBar.prototype, "passwordToCheck", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PasswordStrengthBar.prototype, "barLabel", void 0);
    PasswordStrengthBar = PasswordStrengthBar_1 = __decorate([
        Component({
            selector: 'password-strength-bar',
            styles: ["\n    ul#strengthBar {\n        display:inline;\n        list-style:none;\n        margin:0;\n        margin-left:15px;\n        padding:0;\n        vertical-align:2px;\n    }\n    .point:last {\n        margin:0 !important;\n    }\n    .point {\n        background:#DDD;\n        border-radius:2px;\n        display:inline-block;\n        height:5px;\n        margin-right:1px;\n        width:20px;\n    }"],
            template: "\n    <div id=\"strength\" #strength>\n        <small>{{barLabel}}</small>\n        <ul id=\"strengthBar\">\n            <li class=\"point\" [style.background-color]=\"bar0\"></li><li class=\"point\" [style.background-color]=\"bar1\"></li><li class=\"point\" [style.background-color]=\"bar2\"></li><li class=\"point\" [style.background-color]=\"bar3\"></li><li class=\"point\" [style.background-color]=\"bar4\"></li>\n        </ul>\n    </div>\n"
        })
    ], PasswordStrengthBar);
    return PasswordStrengthBar;
    var PasswordStrengthBar_1;
}());
export { PasswordStrengthBar };
