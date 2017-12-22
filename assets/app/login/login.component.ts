import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

    year: Date;


    constructor(){
      this.year = new Date();
    }
  
    // Background image 
    background = { link : '../../../img/cyber-security-background.png' };

}
