import { Component, OnInit } from '@angular/core';
import { AssessmentService} from '../assessment.service';
import { Assessment } from '../assessment.model';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-assessment-scenario',
  templateUrl: './assessment-scenario.component.html',
  styleUrls: ['./assessment-scenario.component.css']
})
export class AssessmentScenarioComponent implements OnInit {

  chosenAssessment: Assessment;
  start: boolean = false;

  enabledSubmit: boolean = false;

  constructor(
      private assessmentService: AssessmentService,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    let find = [];

    this.activatedRoute.params.subscribe((params: Params)=>{
      this.chosenAssessment = this.assessmentService.findAssessment(params.id)
    })

    this.chosenAssessment.tasks.forEach(task => {
      if(!task.answered){
        find.push(task);
      }
    })

    if(find.length > 0 ){
      this.enabledSubmit = false;
    } else {
      this.enabledSubmit = true;
    }

  }

  startTasks(){
    this.start = true;
  }

  canDeactivate() {
        return confirm('Would you like to submit this assessment?');
   }

}
