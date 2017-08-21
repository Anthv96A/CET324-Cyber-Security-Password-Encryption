import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { AssessmentScenarioComponent } from './assessment-scenario/assessment-scenario.component';
import { TasksComponent } from './tasks/tasks.component';

import { AssessmentSubmissionComponent } from './assessment-submission/assessment-submission.component';

import { CanDeactivateGuard } from '../can-deactivate.guard';
import { RouterModule, Routes} from '@angular/router';


let routes: Routes = [
    {
       path: 'results', component: ResultsComponent,  
    },
    {
      path: 'assessment/:id', component: AssessmentScenarioComponent
    }, 
    {
      path: 'assessment/:id/:taskid', component: TasksComponent, canDeactivate: [CanDeactivateGuard]
    },
    {
      path: 'submission', component: AssessmentSubmissionComponent
    }
    
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AssessmentRoutingModule { }
