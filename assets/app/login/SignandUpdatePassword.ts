import { UserService } from './login.service';
import { User } from './user.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


export class SignUpAndUpdatePassword {

    sub$: Subscription

    public user = {} as User;
    public barLabel: string = "";

    uppercase:number = 0;
    lowercase:number = 0;
    numericValues:number = 0;
    specialChars:number = 0;
    passwordLength:number = 0;


    constructor(public userService: UserService, public router: Router){}

    passwordFeedback(password: string){
        this.uppercase = password.length - password.replace(/[A-Z]/g,'').length;
        this.lowercase = password.length - password.replace(/[a-z]/g,'').length;
        this.numericValues = password.length - password.replace(/[0-9]/g,'').length;
        this.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.passwordLength = password.length;
    }


    extractValues(password:string){
        this.user.uppercase = password.length - password.replace(/[A-Z]/g,'').length;
        this.user.lowercase = password.length - password.replace(/[a-z]/g,'').length;
        this.user.numericValues = password.length - password.replace(/[0-9]/g,'').length;
        this.user.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.user.passwordLength = password.length;
}
}