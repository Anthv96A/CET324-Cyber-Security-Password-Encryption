import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { mainRoutes } from './app.routing';
import { CandidateService } from './candidate/candidate.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ActiveAssessmentsComponent } from './home/active-assessments/active-assessments.component';
import { AvailableAssessmentsComponent } from './home/available-assessments/available-assessments.component';
import { AssessmentStarterModalComponent } from './home/assessment-starter-modal/assessment-starter-modal.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateTableComponent } from './candidate/candidate-table/candidate-table.component';
import { CandidateCreationComponent } from './candidate/candidate-creation/candidate-creation.component';
import { CandidateIntialComponent } from './candidate/candidate-intial.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './login/loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ActiveAssessmentsComponent,
    AvailableAssessmentsComponent,
    AssessmentStarterModalComponent,
    CandidateComponent,
    CandidateTableComponent,
    CandidateCreationComponent,
    CandidateIntialComponent,
    ResultsComponent,
    LoginComponent,
    LoginformComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    mainRoutes,
    NgbModule.forRoot(),
    DataTableModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
