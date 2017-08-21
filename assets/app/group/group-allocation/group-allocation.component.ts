import { Component, OnInit, OnDestroy} from '@angular/core';

import { Response } from '@angular/http';
import { CandidateService } from '../../candidate/candidate.service';
import { GroupService } from '../group.service';

import { Group } from '../group.model';
import { Candidate } from '../../candidate/candidate.model';

import { Observable, Subscription } from 'rxjs/Rx';


class BaseList {
  list: Array<any>;
  selected: Array<any> = [];

  constructor(list: Array<any> = []) {
    this.list = list;
  }
}

@Component({
  selector: 'app-group-allocation',
  templateUrl: './group-allocation.component.html',
  styleUrls: ['./group-allocation.component.css']
})
export class GroupAllocationComponent implements OnInit,OnDestroy {

  private called: boolean = false;

  public _leftList: BaseList;
  public _rightList: BaseList;
  public subcription: Subscription;
  public display: String = 'name';
  public selectedDate;
  public selectedGroup: string;
  public groups: String[] =  ["Graduates (AM)","Graduates (PM)","Placements (AM)", "Placements (PM)" ];

   constructor(
     private candidateService: CandidateService,
     private groupService: GroupService
     ) { }

   ngOnInit(){
     //Create a new instance of BaseList to avoid null point exceptions
     this._leftList = new BaseList(new Array<any>());
     this._rightList = new BaseList(new Array<any>());
   }

   ngOnDestroy(){
     if(this.called){
       this.subcription.unsubscribe();
     } 
   }

   fetchCandidates(){
      let date = new Date(this.selectedDate);
      this.subcription =  this.candidateService.findCandidatesByDate(date).subscribe((data)=>{
            this._leftList.list = data;
            this.called = true;
      })
   }


  createGroup(){
     const copy = this._rightList.list;
     let group: Group = new Group(this.selectedGroup, new Date(), copy);
     this.groupService.addGroup(group).subscribe(
          data => console.log(data),
          error => console.log(error)
      );
  }


  // Methods for toogling lists
  isSelected(list: Array<any>, item: any): Number {
    return list.filter(e => Object.is(e, item)).length;
  }

  selectItem(list: Array<any>, item: any): void {
    const entryItems = list.filter(e => Object.is(e, item));

    if (entryItems.length) {
      entryItems.forEach(v => {
        const idx = list.indexOf(v);
        if (idx + 1) list.splice(idx, 1);
      });
    } else {
      list.push(item);
    }
  }

  moveSelectedItems(fromList: BaseList, toList: BaseList): void {
    // fromList.list = fromList.list.filter(item => !(fromList.selected.indexOf(item)+1));
    const copy = [...fromList.list];
    fromList.list.length = 0;
    copy.forEach(e => {
      if (!(fromList.selected.indexOf(e) + 1)) fromList.list.push(e);
    });

    fromList.selected.forEach(item => toList.list.push(item));
    fromList.selected = [];
  }

  selectAll(list: BaseList): void {
    list.selected = [...list.list];
  }

  isSelectAll(list: BaseList): boolean  {
    return list.selected.length === list.list.length && list.selected.every(v1 => list.list.find(v2 => v1 === v2));
  }

  selectNone(list: BaseList): void {
    list.selected = [];
  }

  isSelectNone(list: BaseList): boolean {
    return list.selected.length === 0;
  }
  // Methods for toogling lists

  
	

}
