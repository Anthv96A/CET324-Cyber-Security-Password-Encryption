var User = /** @class */ (function () {
    function User(username, password, lowercase, uppercase, numericValues, specialChars, passwordLength) {
        this.username = username;
        this.password = password;
        this.lowercase = lowercase;
        this.uppercase = uppercase;
        this.numericValues = numericValues;
        this.specialChars = specialChars;
        this.passwordLength = passwordLength;
    }
    return User;
}());
export { User };
