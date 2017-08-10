import { Component, OnInit } from '@angular/core';
import { AssessmentProperties } from '../assessment.extend';
import { AssessmentService } from '../assessment.service';
import { Assessment } from'../assessment.model'; 

@Component({
  selector: 'app-available-assessments',
  templateUrl: './available-assessments.component.html',
  styleUrls: ['./available-assessments.component.css']
})
export class AvailableAssessmentsComponent extends AssessmentProperties implements OnInit {



    constructor(public assessmentService: AssessmentService) { 
      super(assessmentService)
    }

    ngOnInit() {

        this.assessmentService.availableAssessmentsChanged.subscribe(
          (assessments : Assessment[]) => {
            this.assessments = assessments;
          }
        )
      this.assessments = this.assessmentService.getHiddenAssessments();
  } 


}
