import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingComponent } from './booking/booking.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';



@NgModule({
  declarations: [
    
    BookingComponent,
         UsersigninComponent,
         UsersignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersigninComponent,
         UsersignupComponent,
    
    BookingComponent
  
    
  ]
})
export class UserModule { }
