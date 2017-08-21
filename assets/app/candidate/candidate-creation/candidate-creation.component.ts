import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-candidate-creation',
  templateUrl: './candidate-creation.component.html',
  styleUrls: ['./candidate-creation.component.css']
})
export class CandidateCreationComponent   {

   private subscription: Subscription; 


  constructor(private candidateService: CandidateService){}


  //f is the local reference in the form
  @ViewChild('f') candidateForm: NgForm;

  groupOptions: String[] =  ["Graduates (AM)","Graduates (PM)","Placements (AM)", "Placements (PM)" ];
  groupDefault = this.groupOptions[0];

  createNewCandidate: boolean;


  onAddCandidate(){
      let name: string = this.candidateForm.value.newName;
      let university: string = this.candidateForm.value.newUniversity;
      let degree: string = this.candidateForm.value.newDegree;
      let newDate = this.candidateForm.value.newDate;
      let group: string = this.candidateForm.value.newGroup;
      let candidate: Candidate = new Candidate(name, university, degree, newDate);

      this.candidateService.addCandidate(candidate).subscribe(
          data => console.log(data),
          error => console.log(error)
      );

      if(this.createNewCandidate){
          this.candidateForm.reset();
      } else{
          this.candidateForm.reset();
          this.backToIndex();
      }
   
  }


  onChange(isChecked: boolean){
     this.createNewCandidate = isChecked;
  }


  backToIndex(){
     window.history.back();
  }

  

  
}
