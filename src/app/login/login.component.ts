import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  backgroundImg: any;

  object = {
      link : 'assets/img/nissan_background.jpg'
  }

  constructor() {
    this.backgroundImg = 'url(img/nissan_background.jpg)';
  }
    

  ngOnInit() {
  }

}
