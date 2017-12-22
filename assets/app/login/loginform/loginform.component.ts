import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {



    constructor( private userService: UserService, private router: Router) {}

    public user = {};


    onSubmit(){
      this.userService.signin(this.user).subscribe( 
        data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/home')
        },
        error => console.error(error)
        )

    }

}
