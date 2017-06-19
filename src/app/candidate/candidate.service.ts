import { Injectable } from '@angular/core';
import { Candidate } from './candidate.model';

@Injectable()
export class CandidateService {

  candidates : any[] = [];

  constructor() { }

  addCandidate(event: Candidate){
    this.candidates.push(event);
  }


  getCandidates(){
    return this.candidates;
  }




}
