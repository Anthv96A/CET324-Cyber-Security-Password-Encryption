import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth.guard';

let routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
