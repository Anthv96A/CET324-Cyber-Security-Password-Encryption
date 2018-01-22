var User = /** @class */ (function () {
    function User(username, password, oldPassword, lowercase, uppercase, numericValues, specialChars, passwordLength) {
        this.username = username;
        this.password = password;
        this.oldPassword = oldPassword;
        this.lowercase = lowercase;
        this.uppercase = uppercase;
        this.numericValues = numericValues;
        this.specialChars = specialChars;
        this.passwordLength = passwordLength;
    }
    return User;
}());
export { User };
