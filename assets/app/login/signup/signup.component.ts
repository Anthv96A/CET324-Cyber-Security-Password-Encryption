import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../login.service';
import { SignUpAndUpdatePassword } from '../SignandUpdatePassword';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent extends SignUpAndUpdatePassword implements OnDestroy{

    constructor(userService: UserService, router: Router) {
        super(userService, router)
    }

    onSubmit(){
        this.extractValues(this.user.password);
        this.userService.signup(this.user).subscribe((data)=>{
            console.log(data);
            this.router.navigate(['/login','signin'])
        })
    }

    ngOnDestroy(){
        if(this.sub$ !== undefined){
            this.sub$.unsubscribe();
        }
    }


}
