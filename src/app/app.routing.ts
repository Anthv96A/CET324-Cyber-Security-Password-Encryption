import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ResultsComponent } from './results/results.component';
import { LoginComponent } from './login/login.component';
import { AssessmentSubmissionComponent } from './assessment-submission/assessment-submission.component';
import { TeamAllocationComponent } from './team-allocation/team-allocation.component';
import { AssessmentScenarioComponent } from './assessment-scenario/assessment-scenario.component';

//child routes
import { CandidateRoutes } from './candidate/candidate.routes';
import { ScenarioRoutes } from './assessment-scenario/scenario.routes';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, children: ScenarioRoutes},
    { path: 'results', component: ResultsComponent},
    { path: 'candidates', component: CandidateComponent, children: CandidateRoutes},
    { path: 'login', component: LoginComponent},
    { path: 'assessmentSubmission', component: AssessmentSubmissionComponent},
    { path: 'TeamAllocation', component: TeamAllocationComponent}
]
export const mainRoutes = RouterModule.forRoot(appRoutes);


