export class User {
        constructor(
            public username: string,
            public password: string,
            public oldPassword: string,
            public lowercase: number,
            public uppercase: number,
            public numericValues: number,
            public specialChars: number,
            public passwordLength: number
            ) {}
}