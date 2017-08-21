import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap component
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './login/loginform/loginform.component';

import { AssessmentModule } from './assessment/assessment.module';
import { AppRoutingModule } from './app-routing.module';
import { CandidateModule} from './candidate/candidate.module';
import { HomeModule } from './home/home.module';
import { GroupModule } from './group/group.module';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AssessmentModule,
    CandidateModule,
    HomeModule,
    GroupModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
