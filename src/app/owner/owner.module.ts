import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousedetailsComponent } from './housedetails/housedetails.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';



@NgModule({
  declarations: [
    
    HousedetailsComponent,
         OwnersignupComponent,
         OwnersigninComponent,
         
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OwnersignupComponent,
         OwnersigninComponent,
    
    HousedetailsComponent
    
  ]
})
export class OwnerModule { }
