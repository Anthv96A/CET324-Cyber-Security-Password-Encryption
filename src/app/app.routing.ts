import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ResultsComponent } from './results/results.component';
//child routes
import { CandidateRoutes } from './candidate/candidate.routes';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'results', component: ResultsComponent},
    { path: 'candidates', component: CandidateComponent, children: CandidateRoutes}
]
export const mainRoutes = RouterModule.forRoot(appRoutes);


