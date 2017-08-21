import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import { CandidateComponent } from './candidate.component';
import { CandidateDeletePopupComponent } from './candidate-delete/candidate-delete.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';

import { CanDeactivateGuard } from '../can-deactivate.guard';

let routes : Routes = [
    {path: 'candidates', component: CandidateComponent, children : [
      {path: 'results', component: CandidateTableComponent},
      {path: 'new', component: CandidateCreationComponent},
      {path: ':id/edit', component: CandidateEditComponent},
      {path: ':id/delete', component: CandidateDeletePopupComponent}
    ]}
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
