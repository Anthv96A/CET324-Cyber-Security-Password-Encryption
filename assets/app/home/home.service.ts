import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../login/user.model';
import { Observable } from 'rxjs';
import { ErrorService } from '../validation/errors/error.service';


@Injectable()
export class HomeService{

    private url = 'https://cet324-deployment.herokuapp.com/';

    constructor(
        private http: Http,
        private errorService:ErrorService
    ){}

    fetchUser(): Observable<User>{

        const id: string = localStorage.getItem('userId');

         return this.http.get(this.url+"/user/" + id).map((response:Response) => {
            return response.json();
        });
    }

}