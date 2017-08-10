import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assessment } from '../assessment.model';
import { AssessmentItemProperties} from '../assessment-item.extend';


@Component({
  selector: 'app-available-item',
  templateUrl: './available-item.component.html',
  styleUrls: ['./available-item.component.css']
})
export class AvailableItemComponent extends AssessmentItemProperties {
  
}
