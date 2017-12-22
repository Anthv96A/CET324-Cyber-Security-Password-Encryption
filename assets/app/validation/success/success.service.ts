import { Injectable, EventEmitter } from '@angular/core';
import { Success } from './success.model';

@Injectable()
export class SuccessService{
    successOccured = new EventEmitter<Success>();

    handleSuccess(msg: any){
        const success = new Success(msg.message);
        this.successOccured.emit(success);
    }
   
}