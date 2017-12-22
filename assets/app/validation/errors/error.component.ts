import { Component, OnInit } from '@angular/core';
import { Error } from './error.model';
import { ErrorService } from './error.service';

@Component({
  selector: 'error-occured',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    error: Error;
    display: String = 'none';
    messageErrorClassApplied: boolean = false;

    constructor(private errorService: ErrorService){}


    errorHandled(){
        this.display ='none';
    }

    ngOnInit(){
        this.errorService.errorOccured.subscribe((error: Error) =>{
            this.error = error;
            this.display = 'block';
            this.messageErrorClassApplied = true;
        })
    }
  

}
