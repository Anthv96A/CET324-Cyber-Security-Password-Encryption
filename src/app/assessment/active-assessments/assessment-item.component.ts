import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assessment } from '../assessment.model';
import { AssessmentItemProperties} from '../assessment-item.extend';

@Component({
  selector: 'app-assessment-item',
  templateUrl: './assessment-item.component.html',
  styleUrls: ['./assessment-item.component.css']
})
export class AssessmentItemComponent extends AssessmentItemProperties { 
  
}
