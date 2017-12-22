import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    constructor( private userService: UserService) {}

    public user = {} as User;
    public barLabel: string = "";

    onSubmit(){
        this.extractValues(this.user.password);
        this.userService.signup(this.user).subscribe((data)=>{
            console.log(data);
        })
    }


    private extractValues(password:string){
            
            this.user.uppercase = password.length - password.replace(/[A-Z]/g,'').length;
            this.user.lowercase = password.length - password.replace(/[a-z]/g,'').length;
            this.user.numericValues = password.length - password.replace(/[0-9]/g,'').length;
            this.user.specialChars = password.length - password.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').length;
            this.user.passwordLength = password.length;


            // console.log("Number of uppercase: "+this.uppercase);
            // console.log("Number of lowercase: "+this.lowercase);
            // console.log("Number of numeric values: "+this.numericvalues);
            // console.log("Number of special chars: "+this.specialchars);
            // console.log("Password length: "+this.passwordLength);
        

    }

}
