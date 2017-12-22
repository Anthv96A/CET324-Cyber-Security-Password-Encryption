import { Component, OnInit } from '@angular/core';
import { Success } from './success.model';
import { SuccessService } from './success.service';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{

    success: Success;
    display: String = 'none';
    messageSuccessClassApplied: boolean = false;


    constructor(private successService: SuccessService){}


    ngOnInit(){
        this.successService.successOccured.subscribe((success: Success) =>{
             this.success = success;
             console.log(this.success.message);
             this.display ='block';
             this.messageSuccessClassApplied = true;

        })

    }


    successHandled(){
        this.display = 'none';   
    }
    
}