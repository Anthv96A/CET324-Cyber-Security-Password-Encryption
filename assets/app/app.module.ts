import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Bootstrap component
import { AppComponent } from './app.component';

import { ErrorComponent } from './validation/errors/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserService } from './login/login.service';
import { AuthGuard } from './auth.guard';

import { ErrorService } from './validation/errors/error.service';
import { SuccessComponent } from './validation/success/success.component';
import { SuccessService } from './validation/success/success.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    ErrorService,
    SuccessService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
