var SignUpAndUpdatePassword = /** @class */ (function () {
    function SignUpAndUpdatePassword(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.barLabel = "";
        this.uppercase = 0;
        this.lowercase = 0;
        this.numericValues = 0;
        this.specialChars = 0;
        this.passwordLength = 0;
    }
    SignUpAndUpdatePassword.prototype.passwordFeedback = function (password) {
        this.uppercase = password.length - password.replace(/[A-Z]/g, '').length;
        this.lowercase = password.length - password.replace(/[a-z]/g, '').length;
        this.numericValues = password.length - password.replace(/[0-9]/g, '').length;
        this.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.passwordLength = password.length;
    };
    SignUpAndUpdatePassword.prototype.extractValues = function (password) {
        this.user.uppercase = password.length - password.replace(/[A-Z]/g, '').length;
        this.user.lowercase = password.length - password.replace(/[a-z]/g, '').length;
        this.user.numericValues = password.length - password.replace(/[0-9]/g, '').length;
        this.user.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.user.passwordLength = password.length;
    };
    return SignUpAndUpdatePassword;
}());
export { SignUpAndUpdatePassword };
