import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingComponent } from './booking/booking.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    
    BookingComponent,
         UsersigninComponent,
         UsersignupComponent,
         UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UsersigninComponent,
         UsersignupComponent,
    
    BookingComponent
  
    
  ]
})
export class UserModule { }
