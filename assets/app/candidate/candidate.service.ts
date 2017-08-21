import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Candidate } from './candidate.model';

import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CandidateService {

  private url = 'http://localhost:3000/candidate/';

  private candidates : Candidate[] = [];

  constructor(private http: Http) { }


  findCandidate(id:number): Observable<Candidate>{
    return this.http.get(this.url + id).map((res:Response) =>{
       const updated = res.json();
       this.convertItemFromServer(updated);
       return updated;
    })
  };


  findCandidatesByDate(date: Date): Observable<Candidate[]>{
    date.setUTCHours(0,0,0,0);
    return this.http.get(this.url +'allocation/'+ date).map((res:Response)=>{
        const candidates = res.json().result;
        return candidates;
    });
  };

  addCandidate(candidate: Candidate): Observable<Candidate>{
    this.candidates.push(candidate);
    let headers = new Headers({'Content-Type':'application/json'});
    let body = JSON.stringify(candidate);
    console.log(body);
    return this.http.post(this.url, body, {headers: headers}).map(this.extractData).catch(this.catchException);
  };

  editCandidate(candidate:Candidate): Observable<Candidate>{
      const body = this.convert(candidate);
      return this.http.put(this.url + candidate.candidateID, body).map((res: Response) =>{
          const updated = res.json();
          return updated;
      })
  };

  getCandidates(){
    return this.http.get(this.url).map((res:Response)=>{
      let candidates = res.json().candidates;
      let transformed: Candidate[] = [];

      for(let candidate of candidates){
         transformed.push(new Candidate(candidate.name,candidate.university,candidate.degree,candidate.assessmentDate,candidate._id,candidate.assessmentGroup))
      }
      this.candidates = transformed;
      return transformed;

    })
  };

  deleteCandidate(id: number): Observable<Response>{
      return this.http.delete(this.url + id).map(this.extractData).catch(this.catchException);
  };

   private convert(candidate: Candidate): Candidate {
        const copy: Candidate = Object.assign({}, candidate);
        return copy;
    };


  private convertItemFromServer(candidate: any){
      let date = new Date(candidate.candidate.assessmentDate);
      let fullDate = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear()
      return fullDate;
  }
    


  //These functions are ensure we don't lose the 'this' keyword
  private extractData = (res:Response) =>{
    let body = res.json();
    return body;
  }

  private catchException = (err:Response) => {
    let error = Observable.throw(err.json());
    return error;
  }




}
