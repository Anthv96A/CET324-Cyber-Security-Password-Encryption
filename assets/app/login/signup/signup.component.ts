import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    constructor(private userService: UserService) {}

    public user = {} as User;
    public barLabel: string = "";

    uppercase:number = 0;
    lowercase:number = 0;
    numericValues:number = 0;
    specialChars:number = 0;
    passwordLength:number = 0;

    onSubmit(){
        this.extractValues(this.user.password);
        this.userService.signup(this.user).subscribe((data)=>{
            console.log(data);
        })
    }



    passwordFeedback(password: string){
        this.uppercase = password.length - password.replace(/[A-Z]/g,'').length;
        this.lowercase = password.length - password.replace(/[a-z]/g,'').length;
        this.numericValues = password.length - password.replace(/[0-9]/g,'').length;
        this.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
        this.passwordLength = password.length;
    }


    private extractValues(password:string){
            this.user.uppercase = password.length - password.replace(/[A-Z]/g,'').length;
            this.user.lowercase = password.length - password.replace(/[a-z]/g,'').length;
            this.user.numericValues = password.length - password.replace(/[0-9]/g,'').length;
            this.user.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
            this.user.passwordLength = password.length;
    }

}
