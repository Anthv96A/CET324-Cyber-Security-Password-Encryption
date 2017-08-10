import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import { CandidateComponent } from './candidate.component';
import { TeamAllocationComponent } from './team-allocation/team-allocation.component';

let routes : Routes = [
    {path: 'candidates', component: CandidateComponent, children : [
      {path: 'results', component: CandidateTableComponent},
      {path: 'new', component: CandidateCreationComponent}
    ]},
    {path: 'TeamAllocation', component: TeamAllocationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class CandidateRoutingModule { }
