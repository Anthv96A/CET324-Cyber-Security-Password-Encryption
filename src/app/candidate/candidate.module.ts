import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateRoutingModule } from './candidate-routing.module';

// Components
import { CandidateComponent } from './candidate.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { TeamAllocationComponent } from './team-allocation/team-allocation.component';

// Services
import { CandidateService } from './candidate.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
  	PaginationModule.forRoot(),
    NgxMagicTableModule,
    FormsModule,
    CandidateRoutingModule
  ],
  declarations: [CandidateComponent,CandidateTableComponent,CandidateCreationComponent, TeamAllocationComponent],
  exports: [CandidateComponent,CandidateTableComponent,CandidateCreationComponent, TeamAllocationComponent],
  providers: [CandidateService]
})
export class CandidateModule { }
