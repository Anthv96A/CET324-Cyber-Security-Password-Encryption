import { Routes } from '@angular/router';
import { CandidateCreationComponent } from './candidate-creation/candidate-creation.component';
import { CandidateTableComponent } from './candidate-table/candidate-table.component';
import { CandidateIntialComponent } from './candidate-intial.component';

export const CandidateRoutes: Routes = [
    {path : '', redirectTo: 'results', pathMatch: 'full'},
    {path: 'results', component: CandidateTableComponent},
    {path: 'new', component: CandidateCreationComponent}
]