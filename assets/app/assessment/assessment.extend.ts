import { Input, Output, EventEmitter } from '@angular/core';
import { Assessment } from './assessment.model';
import { AssessmentService } from './assessment.service';


export class AssessmentProperties{

     constructor(public assessmentService: AssessmentService) { }

     assessments: Assessment[] = [];

      changeAssessmentVisiblity(assessment:{id: number, check: boolean}){
            this.assessmentService.changeVisiblity(assessment.id, assessment.check);
      }

}