import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../candidate.model';
declare var $:any;

@Component({
  selector: 'app-candidate-creation',
  templateUrl: './candidate-creation.component.html',
  styleUrls: ['./candidate-creation.component.css']
})
export class CandidateCreationComponent  {

  //f is the local reference in the form
  @ViewChild('f') candidateForm: NgForm;

  groupOptions: String[] =  ["Graduates (AM)","Graduates (PM)","Placements (AM)", "Placements (PM)" ];
  groupDefault = this.groupOptions[0];

  createNewCandidate: boolean;

  constructor(private router: Router, private newCandidate: CandidateService){}

  onAddCandidate(){
      let name: string = this.candidateForm.value.newName;
      let university: string = this.candidateForm.value.newUniversity;
      let degree: string = this.candidateForm.value.newDegree;
      let newDate = this.candidateForm.value.newDate;
      let group: string = this.candidateForm.value.newGroup;
      let candidate: Candidate = new Candidate(name, university, degree, newDate, group);

      this.newCandidate.addCandidate(candidate);

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
      this.router.navigate(['/candidates'])
  }
  
}
