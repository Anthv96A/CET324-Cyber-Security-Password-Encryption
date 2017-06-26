import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assessment } from './assessment.model';

export class AssessmentItemProperties {

    @Input() assessmentItem: Assessment;
    @Input() assessmentID : number;
    @Output() eventVisible = new EventEmitter<{id:number,check: boolean}>();


    toogleVisible(){
        console.log(this.assessmentID);
        this.assessmentItem.enabled = !this.assessmentItem.enabled;
        this.eventVisible.emit({id: this.assessmentID, check: this.assessmentItem.enabled});
    }

}