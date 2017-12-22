import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from '../validation/errors/error.service';
import { SuccessService } from '../validation/success/success.service';


@Injectable()
export class UserService{

    
    private url = 'https://cet324-deployment.herokuapp.com/';

    constructor(private http: Http, private errorService: ErrorService, private successService: SuccessService){}

    signup(user){
        const body  = JSON.stringify(user)
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(this.url +'/user/', body, {headers: headers}).map(this.extractData).catch(this.catchException);
    }

    signin(user){
        const body  = JSON.stringify(user)
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(this.url +'/user/signin', body, {headers: headers}).map((data: Response) =>{ return data.json() }).catch(this.catchException);
    }

    
    logout(){
        localStorage.clear();
    }

     isLoggedIn(){
          return localStorage.getItem('token') !== null;
     }


    private extractData = (res:Response) =>{
        this.successService.handleSuccess(res.json())
        let body = res.json();
        return body;
    }

    private catchException = (err:Response) => {
        this.errorService.handleError(err.json());
        let error = Observable.throw(err.json());
        return error;
    }

}
