import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html'
})
export class CandidateEditComponent implements OnInit,OnDestroy  {

  @ViewChild('f') candidateForm: NgForm;

  groupOptions: String[] =  ["Graduates (AM)","Graduates (PM)","Placements (AM)", "Placements (PM)" ];
  groupDefault = this.groupOptions[0];



   private subscription: Subscription; 

   private candidate: any;


  constructor(
      private router: Router,
      private candidateService: CandidateService,
      private activeRoute: ActivatedRoute){}


    ngOnInit(){
      this.subscription = this.activeRoute.params.subscribe((params)=>{
            this.candidateService.findCandidate(params.id).subscribe((data) =>{
                this.candidate = data;
                console.log(this.candidate.candidate);
            });
     });  
    };


    ngOnDestroy(){
        this.subscription.unsubscribe();
    }


    onSubmit(){
      let id: number = this.candidateForm.value.newId;  
      let name: string = this.candidateForm.value.newName;
      let university: string = this.candidateForm.value.newUniversity;
      let degree: string = this.candidateForm.value.newDegree;
      let newDate = this.candidateForm.value.newDate;
      //let group: string = this.candidateForm.value.newGroup;
      let candidate: Candidate = new Candidate(name, university, degree, newDate, id);


      this.candidateService.editCandidate(candidate).subscribe(
          data => console.log(data),
          error => console.log(error)
      )

   
    }

     backToIndex(){
        window.history.back();
     }


}
