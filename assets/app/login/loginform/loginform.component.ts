import { Component, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnDestroy {

    subscription$: Subscription;

    constructor( private userService: UserService, private router: Router) {}

    user = {} as User;

    onSubmit(){
      this.subscription$ = this.userService.signin(this.user).subscribe( 
        data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/home')
        },
        error => console.error(error)
        )
    }

    ngOnDestroy(){
        if(this.subscription$ !== undefined){
            this.subscription$.unsubscribe();
        }
    }

}
