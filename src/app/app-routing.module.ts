import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CandidateComponent } from './candidate/candidate.component';
// import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { AssessmentScenarioComponent } from './assessment/assessment-scenario/assessment-scenario.component';

import { CanDeactivateGuard } from './can-deactivate.guard';

//child routes
//import { CandidateRoutes } from './candidate/candidate.routes';


let routes: Routes = [
    { 
      path: 'login', component: LoginComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
