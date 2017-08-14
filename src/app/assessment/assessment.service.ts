import { Injectable , EventEmitter} from '@angular/core';
import { Assessment } from './assessment.model';
import { Task } from './tasks/task.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AssessmentService {

   constructor() { }

      activeAssessmentsChanged = new Subject<Assessment[]>()
      availableAssessmentsChanged = new Subject<Assessment[]>()


      public assessments: Assessment[] = [
          {
            "id": 1,
            "name":"survival",
            "description":"Your plane has crashed. Sort a list of items into order of importance and justify your choice.",
            "enabled": true,
            "imageURL":"assets/img/plane.jpg",
            "scenario": "You and your companions have just survived the crash of a small plane. Both the pilot and the co-pilot where been killed in the crash. It is mid-January, and you are in Northern Canada. The daily temperature is above -25C, and the night time temperature is -40C. There is snow on the ground, and the countryside is wooded with several creeks criss-crossing the area. The nearest town is 20 miles away. You are dressed in city clothes appropriate for a business meeting.",
            "items": [
              "A ball of steel wool",
              "A small axe",
              "A loaded .45 calibre pistol",
              "Can of goose fat",
              "Newspaper (one per person)",
              "Cigarette lighter (without fluid)",
              "Extra shirt and pants for each survivor",
              "A 20ft x 20ft piece of heavy-duty canvas",
              "A sectional air map made of plastic",
              "One litre of 100% proof whiskey",
              "A compass",
              "Family-sized Chocolate bars (one per person)"
              ],
              "objectives": [
                "What is your plan of action? Will you stay or will you leave and find help?",
                "List the above items in order of importance for your survival.",
                "List the uses for each item."
              ],
              "tasks": [
                      { 
                        "taskID":1,
                        "name":"plane",
                        "description":"What do you do? Do you stay or do you go looking for help?",
                        "questions": [
                          "hbbd",
                          "swdw"
                        ],
                          "images": [
                          "planeCrash_ConceptArt.jpg",
                          "LookingForHelp_ConceptArt.jpg"
                        ],
                        "type":"image",
                        "answered": false
                      },
                       { 
                        "taskID":2,
                        "name":"someother",
                        "description":"Order the list items in order of importance. The highest being the most important and the lowest being the least",
                        "questions": [
                          "A Ball Of Steel Wool",
                          "A Small Axe",
                          "A Loaded .45 Calibre Pistol",
                          "A Can Of Goose Fat",
                          "A Newspaper (One Per Person)",
                          "A Cigarette Lighter (Without Fluid)",
                          "An Extra shirt and pants for each survivor",
                          "A 20ft x 20ft piece of heavy-duty canvas",
                        ],
                        
                        "type":"text",
                        "answered": false
                        
                      },
                      { 
                        "taskID":3,
                        "name":"textbox",
                        "description":"Why would you use these items that you have discovered at the crash site?",
                        "questions": [
                          "A Ball Of Steel Wool",
                          "A Small Axe",
                          "A Loaded .45 Calibre Pistol",
                          "A Can Of Goose Fat",
                          "A Newspaper (One Per Person)",
                          "A Cigarette Lighter (Without Fluid)",
                          "An Extra shirt and pants for each survivor",
                          "A 20ft x 20ft piece of heavy-duty canvas",
                        ],
                        
                        "type":"textbox",
                        "answered": false
                        
                      }

                  ]
          },
           {
            "id": 2,
            "name":"decisions",
            "description":"Your boat has crashed. Sort a list of items into order of importance and justify your choice.",
            "enabled": true,
            "imageURL":"assets/img/boat.jpg",
            "scenario": "You and your companions have just survived the crash of a small boat. Both the pilot and the co-pilot where been killed in the crash. It is december, and you are in the Altanic Ocean. The water temperature is approximately -5C. There is no land in sight. The nearest island is 20 miles away. What do you do?",
            "items": [
                "A shaving mirror",
                "A map",
                "5 litres of water",
                "Fishing rod",
                "Army Biscuits",
                "Cigarette lighter",
                "Raft",
                "A 20ft x 20ft piece of heavy-duty canvas",
                "A sectional air map made of plastic",
                "One litre of 100% proof whiskey",
                "A compass",
                "Family-sized Chocolate bars (one per person)"
              ],
              "objectives": [
                  "What is your plan of action? Will you stay or will you leave and find help?",
                  "List the above items in order of importance for your survival. Choose wisely.",
                  "List the uses for each item."
              ], 
              "tasks": [
                  { 
                    "taskID":1,
                     "name":"boat",
                     "description":"What do you do? You can either select to stay on the boat or take your chances with the Ocean",
                     "questions": [
                       "hbbd",
                       "swdw"
                     ],
                      "images": [
                       "boat.jpg",
                       "ocean.jpg"
                     ],
                     "type":"image"
                  }
              ]
          },
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


     findAssessment(id: number): Assessment{
        return this.assessments.find((assessment: Assessment) => assessment.id == id)
     }


     findTask(assessmentId:number ,taskid: number) : Task{
        let assessment = this.assessments.find((assessment:Assessment) => assessment.id == assessmentId)
      
        return assessment.tasks.find((task:Task) => task.taskID == taskid)
     }



}
