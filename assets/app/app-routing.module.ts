import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './validation/errors/error.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { SuccessComponent } from './validation/success/success.component';


let routes: Routes = [
    { path: 'error', component: ErrorComponent },
    { path: 'success', component: SuccessComponent }
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
