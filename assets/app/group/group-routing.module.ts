import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { GroupAllocationComponent } from './group-allocation/group-allocation.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupListAllComponent } from './group-list-all/group-list-all.component';
import { GroupListTodayComponent } from './group-list-today/group-list-today.component';


let routes : Routes = [    
    { path: 'group-allocation',  component: GroupAllocationComponent },
    { path: 'group-list', component: GroupListComponent, children: [
       { path: 'all', component: GroupListAllComponent},
       { path: 'today', component: GroupListTodayComponent}
    ]},
   
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class GroupRoutingModule { }
