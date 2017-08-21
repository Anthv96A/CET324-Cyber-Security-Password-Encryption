import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';

import { Candidate } from '../candidate.model';

@Component({
  selector: 'app-candidate-popup-delete',
  template: `
      <h2> Candidate Deleted succesfully </h2>
  `
})
export class CandidateDeletePopupComponent implements OnInit, OnDestroy{

      modalRef: NgbModalRef;
      routeSub: any;

     constructor(
         private activeRoute: ActivatedRoute,
         private candidateService: CandidateService
     ){}


      ngOnInit(){
           this.routeSub = this.activeRoute.params.subscribe((params) =>{
               this.candidateService.deleteCandidate(params.id).subscribe(
                   (response)=> console.log(response),
                   (error) => console.log(error)
                )
        })
      }

      ngOnDestroy(){
        this.routeSub.unsubscribe();
      }



}