import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ErrorService } from '../validation/errors/error.service';


@Injectable()
export class HomeService{

   
    private url = 'https://cet324-deployment.herokuapp.com/';

 //  private url = 'http://localhost:3000/';

    constructor(
        private http: Http,
        private errorService:ErrorService
    ){}

    fetchUser(){

        const id: string = localStorage.getItem('userId');

         return this.http.get(`${this.url}user/` + id).map((response:Response) => {
            return response.json();
        });
    }

}