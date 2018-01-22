import { Component } from '@angular/core';
import { SignUpAndUpdatePassword } from '../SignandUpdatePassword';
import { UserService } from '../login.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends SignUpAndUpdatePassword implements OnDestroy{
    constructor(userService: UserService, router: Router) {
        super(userService, router)
    }


    onSubmit(){
        this.extractValues(this.user.password);
        this.sub$ = this.userService.changePassword(this.user).subscribe((data)=>{
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
