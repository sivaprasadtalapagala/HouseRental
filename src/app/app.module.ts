import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerModule } from './owner/owner.module';
import { UserModule } from './user/user.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    HowItWorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    OwnerModule,
    ReactiveFormsModule,
    //importing all modules started
    AdminModule,
    OwnerModule,
    UserModule,
    BrowserAnimationsModule,
    //modules importing ended
    MatCardModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
