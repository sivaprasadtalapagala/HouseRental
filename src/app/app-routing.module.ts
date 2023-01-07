import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HousedetailsComponent } from './owner/housedetails/housedetails.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnersigninComponent } from './owner/ownersignin/ownersignin.component';
import { OwnersignupComponent } from './owner/ownersignup/ownersignup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingComponent } from './user/booking/booking.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './user/usersignin/usersignin.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';

const routes: Routes = [
  {path:'',component:UsersigninComponent,pathMatch: 'full'},
  {path:'home',component:HomepageComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'how-it-works',component:HowItWorksComponent},
  {path:'owner',component:OwnerComponent,children:[
    {path:'',component:OwnersigninComponent},
    {path:'ownersignin',component:OwnersigninComponent},
    {path:'ownersignup',component:OwnersignupComponent},
    {path:'houseDetails',component:HousedetailsComponent}
  ]},
  {path:'user',component:UserComponent,children:[
    {path:'',component:UsersigninComponent},
    {path:'usersignin',component:UsersigninComponent},
    {path:'usersignup',component:UsersignupComponent},
    {path:'booking',component:BookingComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'',component:SigninComponent},
    {path:'adminsignin',component:SigninComponent},
    {path:'adminsignup',component:SignupComponent},
  ]},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
