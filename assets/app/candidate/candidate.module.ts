//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { CandidateRoutingModule } from './candidate-routing.module';

//NPM modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { CandidateComponent } from './candidate.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { CandidateDeletePopupComponent } from './candidate-delete/candidate-delete.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component';

// Services
import { CandidateService } from './candidate.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
  	PaginationModule.forRoot(),
    FormsModule,
    CandidateRoutingModule
  ],
  declarations: [
    CandidateComponent,
    CandidateTableComponent,
    CandidateCreationComponent,
    CandidateDeletePopupComponent,
    CandidateEditComponent
    ],
  entryComponents: [
      CandidateDeletePopupComponent
    ],
  exports: [
    CandidateComponent,
    CandidateTableComponent,
    CandidateCreationComponent,
    CandidateDeletePopupComponent,
    CandidateEditComponent
    ],
  providers: [CandidateService]
})
export class CandidateModule { }
