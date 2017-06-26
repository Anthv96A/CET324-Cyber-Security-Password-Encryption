import { Component, OnInit } from '@angular/core';
import { AssessmentProperties } from '../assessment.extend';
import { AssessmentService } from '../assessment.service';
import { Assessment } from'../assessment.model'; 

@Component({
  selector: 'app-active-assessments',
  templateUrl: './active-assessments.component.html',
  styleUrls: ['./active-assessments.component.css']
})
export class ActiveAssessmentsComponent extends AssessmentProperties  implements OnInit {



    constructor(public assessmentService: AssessmentService) { 
      super(assessmentService)
    }

    ngOnInit() {

        this.assessmentService.activeAssessmentsChanged.subscribe(
          (assessments : Assessment[]) => {
            this.assessments = assessments;
          }
        )
      this.assessments = this.assessmentService.getActiveAssessments();
  } 
}
