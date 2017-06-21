import { Injectable , EventEmitter} from '@angular/core';
import { Assessment } from './assessment.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AssessmentService {

   constructor() { }

      activeAssessmentsChanged = new Subject<Assessment[]>()

      availableAssessmentsChanged = new Subject<Assessment[]>()


      public assessments: Assessment[] = [
        new Assessment("Survival","Your plane has crashed. Sort a list of items into order of importance and justify your choice.",true,"assets/img/plane.jpg"),
        new Assessment("Survival","Your boat has crashed. Sort a list of items into order of importance and justify your choice.",true,"assets/img/boat.jpg"),
      ];


     getActiveAssessments(){
       let filter: Assessment[] = [];

       for(let i = 0; i < this.assessments.length; i++){
            if(this.assessments[i].enabled){
              filter.push(this.assessments[i]);
            }
       }
       return filter.slice();
     }


     getHiddenAssessments(){
        let filter: Assessment[] = [];

        for(let i = 0; i < this.assessments.length; i++){
              if(!this.assessments[i].enabled){
                filter.push(this.assessments[i]);
              }
        }
        return filter.slice();
     }


     changeVisiblity(id:number , isVisible: boolean){
        this.assessments[id].enabled = isVisible;
        this.activeAssessmentsChanged.next(this.getActiveAssessments());
        this.availableAssessmentsChanged.next(this.getHiddenAssessments());
     }




}
