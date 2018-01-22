import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Ranking } from './home.enum';

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
        let deduction: number = 0;

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

        for(let j = 0; j <= this.lowercase; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS){
                    continue;
                } else{
                    score+=5;
                }
            }
        }
        
        for(let j = 0; j <= this.uppercase; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS){
                    continue;
                } else{
                    score+=5;
                }
            }
        }

        for(let j = 0; j <= this.specialChars; j++){
            if(j >= 1){
                if(j >=  HomeComponent.MAX_ATTEMPTS ){
                    continue;
                } else{
                    score+=5;
                }
            }
        }

        for(let j = 0; j <= this.numericValues; j++){
            if(j >= 1){
                if(j >= HomeComponent.MAX_ATTEMPTS ){
                    continue;
                } else{
                    score+=5;
                }
            }
        }



        if(this.numericValues == 0){
            deduction += 5;
        } 
        if(this.uppercase == 0){
            deduction += 5;
        }
        if(this.specialChars == 0){
            deduction += 5;
        }

        if(this.lowercase == 0){
            deduction += 5;
        }

        if(deduction !== 0){
            // penality for bad variety
            return score - deduction;
        }

        return score;
    }

    outputFeedback(){
        if(this.passwordLength < 8){
            this.passwordLengthTextResult = Ranking.POOR;
        } else if (this.passwordLength >= 8 && this.passwordLength < 11) {
            this.passwordLengthTextResult = Ranking.GOOD;
        } else{
            this.passwordLengthTextResult = Ranking.VERY_GOOD;
        }


        if(this.lowercase == 0){
            this.lowercaseTextResult = Ranking.POOR;
        } else if(this.lowercase >=1 && this.lowercase < 4){
            this.lowercaseTextResult = Ranking.GOOD
        } else{
            this.lowercaseTextResult = Ranking.VERY_GOOD;
        }

        if(this.uppercase == 0){
            this.uppercaseTextResult = Ranking.POOR;
        } else if(this.uppercase >=1 && this.uppercase < 4){
            this.uppercaseTextResult = Ranking.GOOD
        } else{
            this.uppercaseTextResult = Ranking.VERY_GOOD;
        }

        if(this.specialChars == 0){
            this.specialCharsTextResult = Ranking.POOR;
        } else if(this.specialChars >=1 && this.specialChars < 4){
            this.specialCharsTextResult = Ranking.GOOD
        } else{
            this.specialCharsTextResult = Ranking.VERY_GOOD;
        }

        if(this.numericValues == 0){
            this.numericValuesTextResult = Ranking.POOR;
        } else if(this.numericValues >=1 && this.numericValues < 4){
            this.numericValuesTextResult = Ranking.GOOD
        } else{
            this.numericValuesTextResult = Ranking.VERY_GOOD;
        }
    }

    finalOutputString(): string {
        let passwordLengthOutput: string;
        let lowercaseOutout: string;
        let uppercaseOutput: string;
        let specialCharsOutput: string;
        let numericValuesOutput: string;

        let finalOutput: string = "";


        if(this.passwordLengthTextResult === Ranking.POOR){
            passwordLengthOutput = "your password length is poor, try to aim for 8 - 12 characters.";
        } else if(this.passwordLengthTextResult === "Good"){
            passwordLengthOutput = `your password length is good at ${this.passwordLength} characters, try to aim for 12 characters or more. `;
        } else{
            passwordLengthOutput = `your password length is very good at ${this.passwordLength} characters, well done!`;
        }

        if(this.lowercaseTextResult === Ranking.POOR){
            lowercaseOutout = "Number of lowercase is poor, we recommend at least 1 lowercase.";
        } else if(this.lowercaseTextResult === "Good"){
            lowercaseOutout = `Number of lowercase is good at ${this.lowercase} characters, try to aim for 4 characters or more. `;
        } else{
            lowercaseOutout = `Number of lowercase is good at ${this.lowercase} characters, well done!`;
        }

        if(this.uppercaseTextResult === Ranking.POOR){
            uppercaseOutput = "Number of uppercase is poor, we recommend at least 1 uppercase.";
        } else if(this.uppercaseTextResult === Ranking.GOOD){
            uppercaseOutput = `Number of uppercase is good at ${this.uppercase} characters, try to aim for 4 characters or more. `;
        } else{
            uppercaseOutput = `Number of uppercase is good at ${this.uppercase} characters, well done!`;
        }

        if(this.specialCharsTextResult === Ranking.POOR){
            specialCharsOutput = "Number of special characters is poor, we recommend at least 1 special character. For example $,!,£,?,% .";
        } else if(this.specialCharsTextResult === Ranking.GOOD){
            specialCharsOutput = `Number of special characters is good at ${this.specialChars} characters, try to aim for 4 characters or more. `;
        } else{
            specialCharsOutput = `Number of special characters is good at ${this.specialChars} characters, well done!`;
        }

        if(this.numericValuesTextResult === Ranking.POOR){
            numericValuesOutput = "Number of numeric values is poor, we recommend at least 1 numeric value.";
        } else if(this.numericValuesTextResult === Ranking.GOOD){
            numericValuesOutput = `Number of numeric value is good at ${this.numericValues} characters, try to aim for 4 characters or more. `;
        } else{
            numericValuesOutput = `Number of numeric value is good at ${this.numericValues} characters, well done!`;
        }

        finalOutput += `Hi ${this.username},
         ${passwordLengthOutput} ${lowercaseOutout} ${uppercaseOutput} ${specialCharsOutput} ${numericValuesOutput}`

        return finalOutput;
    }

}
