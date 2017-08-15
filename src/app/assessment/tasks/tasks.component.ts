import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssessmentService} from '../assessment.service';
import { Assessment } from '../assessment.model';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Task } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {





   chosenTask: Task;
   selectedImageProperty: any;
   paramID: number;
   taskID : number;
   questions: any[];
   answers: string[];

   //f is the local reference in the form
   @ViewChild('f') reasonForm: NgForm;

  constructor(
      private assessmentService: AssessmentService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params)=>{
      console.log(params);
      this.selectedImageProperty = undefined;
      this.chosenTask = this.assessmentService.findTask(params.id, params.taskid);
      this.chosenTask.answered = true;
      if(this.chosenTask.type =="text"){
        this.questions = this.chosenTask.questions;
      }
    })
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  previousState() {
      window.history.back();
   }

  submitList(){
    let newArray = this.chosenTask.questions;
    console.log(newArray);
  }


  onSelectImage(image){
    this.selectedImageProperty = image;
  }

    canDeactivate() {
        return confirm('Any unsubmitted changes will be lost');
    }



}
