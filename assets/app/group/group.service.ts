import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Candidate } from '../candidate/candidate.model';
import { Group } from './group.model';

import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()
export class GroupService {

    private url = 'http://localhost:3000/group/';

    groups: Group[] = [];

    constructor(private http: Http){}



    addGroup(group: Group): Observable<Group>{
        group.date.setUTCHours(0,0,0,0);
        let headers = new Headers({'Content-Type':'application/json'});
        let body = JSON.stringify(group);
        console.log(body);
        return this.http.post(this.url, body, {headers: headers}).map(this.extractData).catch(this.catchException); 
    }

    fetchGroups(){
      return this.http.get(this.url).map((res:Response)=>{
        let groups = res.json().groups;
        let transformed: Group[] = [];

        for(let group of groups){
          transformed.push(new Group(group.name, group.date, group.candidates, group._id));
        }
        this.groups = transformed;
        return transformed;
      })
    };

    findGroupByDate(date: Date): Observable<Group[]>{
        date.setUTCHours(0,0,0,0);
        return this.http.get(this.url +'list/'+ date).map((res:Response)=>{
          const group = res.json().result;
          return group;
     });
    }


    deleteGroup(){

    }

    editGroup(){

    }

  private extractData = (res:Response) =>{
    let body = res.json();
    return body;
  }

  private catchException = (err:Response) => {
    let error = Observable.throw(err.json());
    return error;
  }





}