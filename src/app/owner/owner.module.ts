import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousedetailsComponent } from './housedetails/housedetails.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { RouterModule } from '@angular/router';
import { OwnerComponent } from './owner.component';



@NgModule({
  declarations: [
    
    HousedetailsComponent,
         OwnersignupComponent,
         OwnersigninComponent,
         OwnerComponent,
         
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OwnersignupComponent,
         OwnersigninComponent,
    
    HousedetailsComponent
    
  ]
})
export class OwnerModule { }
