import { Component, OnInit, OnDestroy} from '@angular/core';

import { Response } from '@angular/http';
import { CandidateService } from '../../candidate/candidate.service';
import { GroupService } from '../group.service';

import { Group } from '../group.model';
import { Candidate } from '../../candidate/candidate.model';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-group-today-list',
  templateUrl: './group-list-today.component.html',
  styleUrls: ['./group-list-today.component.css']
})
export class GroupListTodayComponent  {

  public subcription: Subscription;
  public allGroups: Group[];
  public check: boolean = false;


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
      this.subcription = this.groupService.findGroupByDate(new Date()).subscribe((data)=>{
          this.allGroups = data;
          if(this.allGroups.length > 0){
              this.check = true;
          }
      })
   }



  
	

}
