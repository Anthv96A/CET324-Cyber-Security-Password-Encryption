import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-allocation',
  templateUrl: './team-allocation.component.html',
  styleUrls: ['./team-allocation.component.css']
})
export class TeamAllocationComponent implements OnInit {

  groupOptions: String[] =  ["Graduates (AM)","Graduates (PM)","Placements (AM)", "Placements (PM)" ];
  groupDefault = this.groupOptions[0];
  
  constructor() { }

  ngOnInit() {
  }

}
