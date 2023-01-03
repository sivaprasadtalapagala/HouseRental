import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SignupComponent,
    SigninComponent


  ]
})
export class AdminModule { }
