import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

import 'rxjs/Rx';

import { Subscription } from 'rxjs/Subscription';
import { User } from '../login/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private static MAX_ATTEMPTS_PASSWORD_LENGTH: number = 12;
    private static MAX_ATTEMPTS: number = 5;


    totalScore: number;
    outputMessage: string;

    username: string;
    passwordLength: number;
    lowercase: number;
    uppercase: number;
    specialChars: number;
    numericValues: number;
    subscription$: Subscription;


    passwordLengthTextResult: string;
    lowercaseTextResult: string;
    uppercaseTextResult: string;
    specialCharsTextResult: string;
    numericValuesTextResult: string;


    constructor(private homeService: HomeService){}

    ngOnInit(){
      this.subscription$ = this.homeService.fetchUser().subscribe((data)=>{
            this.username = data.obj.username;
            this.passwordLength = data.obj.passwordLength;
            this.lowercase = data.obj.lowercase;
            this.uppercase = data.obj.uppercase;
            this.specialChars = data.obj.specialChars;
            this.numericValues = data.obj.numericValues;

            this.totalScore = this.determinePasswordScore();
            this.outputFeedback();
            this.outputMessage = this.finalOutputString();
        })

       

    }

    ngOnDestroy(){
        this.subscription$.unsubscribe();
    }


    determinePasswordScore(): number{

        let score: number = 0;

        for(let i = 0; i <= this.passwordLength; i++){
            if(i > 7){
                // Maximum score here can be only be 20
                if(i >= HomeComponent.MAX_ATTEMPTS_PASSWORD_LENGTH ){
                    // Break out the loop it becomes bigger than 12. 
                    // We will have already determined the top score for this part
                    continue;
                } else{
                    score+=5;
                }
            }
           
        }
        // console.log("Score on password length: " + score)
        // score = 0;

        for(let j = 0; j <= this.lowercase; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS){
                    continue;
                } else{
                    score+=5;
                }
            }
        }


        // console.log("Score on lowercase: " + score)
        // score = 0;

        
        for(let j = 0; j <= this.uppercase; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS){
                    continue;
                } else{
                    score+=5;
                }
            }
        }

        // console.log("Score on uppercase: " + score)
        // score = 0;


        for(let j = 0; j <= this.specialChars; j++){
            if(j >= 1){
                if(j >=  HomeComponent.MAX_ATTEMPTS ){
                    continue;
                } else{
                    score+=5;
                }
            }
        }
        // console.log("Score on special chars: " + score)
        // score = 0;

        

        for(let j = 0; j <= this.numericValues; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS ){
                    continue;
                } else{
                    score+=5;
                }
            }
        }
        // console.log("Score on numeric values: " + score)
        // score = 0;

        return score;
    }


    outputFeedback(){
        if(this.passwordLength < 8){
            this.passwordLengthTextResult = "Poor";
        } else if (this.passwordLength >= 8 && this.passwordLength < 11) {
            this.passwordLengthTextResult = "Good";
        } else{
            this.passwordLengthTextResult = "Very Good";
        }


        if(this.lowercase == 0){
            this.lowercaseTextResult = "Poor";
        } else if(this.lowercase >=1 && this.lowercase < 4){
            this.lowercaseTextResult = "Good"
        } else{
            this.lowercaseTextResult = "Very Good"
        }

        if(this.uppercase == 0){
            this.uppercaseTextResult = "Poor";
        } else if(this.uppercase >=1 && this.uppercase < 4){
            this.uppercaseTextResult = "Good"
        } else{
            this.uppercaseTextResult = "Very Good"
        }

        if(this.specialChars == 0){
            this.specialCharsTextResult = "Poor";
        } else if(this.specialChars >=1 && this.specialChars < 4){
            this.specialCharsTextResult = "Good"
        } else{
            this.specialCharsTextResult = "Very Good"
        }

        if(this.numericValues == 0){
            this.numericValuesTextResult = "Poor";
        } else if(this.numericValues >=1 && this.numericValues < 4){
            this.numericValuesTextResult = "Good"
        } else{
            this.numericValuesTextResult = "Very Good"
        }
    }


    finalOutputString(): string {
        let passwordLengthOutput: string;
        let lowercaseOutout: string;
        let uppercaseOutput: string;
        let specialCharsOutput: string;
        let numericValuesOutput: string;

        let finalOutput: string = "";


        if(this.passwordLengthTextResult === "Poor"){
            passwordLengthOutput = "your password length is poor, try to aim for 8 - 12 characters.";
        } else if(this.passwordLengthTextResult === "Good"){
            passwordLengthOutput = `your password length is good at ${this.passwordLength} characters, try to aim for 12 characters or more. `;
        } else{
            passwordLengthOutput = `your password length is very good at ${this.passwordLength} characters, well done!`;
        }

        if(this.lowercaseTextResult === "Poor"){
            lowercaseOutout = "Number of lowercase is poor, we recommend at least 1 lowercase.";
        } else if(this.lowercaseTextResult === "Good"){
            lowercaseOutout = `Number of lowercase is good at ${this.lowercase} characters, try to aim for 4 characters or more. `;
        } else{
            lowercaseOutout = `Number of lowercase is good at ${this.lowercase} characters, well done!`;
        }

        if(this.uppercaseTextResult === "Poor"){
            uppercaseOutput = "Number of uppercase is poor, we recommend at least 1 uppercase.";
        } else if(this.uppercaseTextResult === "Good"){
            uppercaseOutput = `Number of uppercase is good at ${this.uppercase} characters, try to aim for 4 characters or more. `;
        } else{
            uppercaseOutput = `Number of uppercase is good at ${this.uppercase} characters, well done!`;
        }

        if(this.specialCharsTextResult === "Poor"){
            specialCharsOutput = "Number of special characters is poor, we recommend at least 1 special character. For example $,!,£,?,% .";
        } else if(this.specialCharsTextResult === "Good"){
            specialCharsOutput = `Number of special characters is good at ${this.specialChars} characters, try to aim for 4 characters or more. `;
        } else{
            specialCharsOutput = `Number of special characters is good at ${this.specialChars} characters, well done!`;
        }

        if(this.numericValuesTextResult === "Poor"){
            numericValuesOutput = "Number of numeric values is poor, we recommend at least 1 numeric value.";
        } else if(this.numericValuesTextResult === "Good"){
            numericValuesOutput = `Number of numeric value is good at ${this.numericValues} characters, try to aim for 4 characters or more. `;
        } else{
            numericValuesOutput = `Number of numeric value is good at ${this.numericValues} characters, well done!`;
        }

        finalOutput += `Hi ${this.username},
         ${passwordLengthOutput} ${lowercaseOutout} ${uppercaseOutput} ${specialCharsOutput} ${numericValuesOutput}`

        return finalOutput;
    }



}
