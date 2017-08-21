//Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupRoutingModule } from './group-routing.module';

// Components
import { GroupAllocationComponent } from './group-allocation/group-allocation.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupListAllComponent } from './group-list-all/group-list-all.component';
import { GroupListTodayComponent } from './group-list-today/group-list-today.component';

// Services
import { CandidateService } from '../candidate/candidate.service';
import { GroupService } from './group.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    GroupRoutingModule
  ],
  declarations: [
    GroupAllocationComponent,
    GroupListComponent,
    GroupListAllComponent,
    GroupListTodayComponent
    ],
  exports: [
    GroupAllocationComponent,
    GroupListComponent,
    GroupListAllComponent,
    GroupListTodayComponent
    ],
  providers: [
    CandidateService,
    GroupService
    ]
})
export class GroupModule { }
