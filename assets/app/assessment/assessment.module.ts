import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AssessmentRoutingModule } from './assessment-routing.module';

import { AssessmentService } from './assessment.service';

import { ActiveAssessmentsComponent } from './active-assessments/active-assessments.component';
import { AvailableAssessmentsComponent } from './available-assessments/available-assessments.component';
import { AvailableItemComponent } from './available-assessments/available-item.component';
import { AssessmentItemComponent } from './active-assessments/assessment-item.component';
import { AssessmentScenarioComponent } from './assessment-scenario/assessment-scenario.component';
import { ResultsComponent } from './results/results.component';
import { TasksComponent } from './tasks/tasks.component';

import { AssessmentSubmissionComponent } from './assessment-submission/assessment-submission.component';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    DndModule.forRoot(),
    FormsModule
  ],
  declarations: [
    AvailableItemComponent, 
    AssessmentItemComponent,
    ActiveAssessmentsComponent,
    AvailableAssessmentsComponent,
    AssessmentScenarioComponent,
    ResultsComponent,
    TasksComponent,
    AssessmentSubmissionComponent
    ],
  exports: [
     AvailableItemComponent,
     AssessmentItemComponent,
     ActiveAssessmentsComponent,
     AvailableAssessmentsComponent,
     AssessmentScenarioComponent,
     ResultsComponent,
     TasksComponent,
     AssessmentSubmissionComponent
     ],
  providers: [AssessmentService]
})
export class AssessmentModule { }
