import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginformComponent } from './loginform/loginform.component';


let routes: Routes = [
   { path: '', redirectTo: '/login/signin', pathMatch: 'full' },
   { path: 'login', component: LoginComponent, children: [
     {path: 'signup', component: SignUpComponent},
     {path: 'signin', component: LoginformComponent}

   ] }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
