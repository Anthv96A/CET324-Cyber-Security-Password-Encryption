import { Component, OnInit, OnDestroy} from '@angular/core';

import { Response } from '@angular/http';
import { CandidateService } from '../../candidate/candidate.service';
import { GroupService } from '../group.service';

import { Group } from '../group.model';
import { Candidate } from '../../candidate/candidate.model';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-group-all-list',
  templateUrl: './group-list-all.component.html',
  styleUrls: ['./group-list-all.component.css']
})
export class GroupListAllComponent implements OnInit, OnDestroy  {

  public subcription: Subscription;
  public allGroups: Group[];


   constructor(
     private candidateService: CandidateService,
     private groupService: GroupService
     ) { }

   ngOnInit(){
      this.fetchGroups();
   }

   ngOnDestroy(){
       this.subcription.unsubscribe();
   }

   fetchGroups(){
      this.subcription = this.groupService.fetchGroups().subscribe((data)=>{
          this.allGroups = data;
      })
   }



  
	

}
