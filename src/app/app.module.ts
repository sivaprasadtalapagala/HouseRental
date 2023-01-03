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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ForgetPasswordComponent
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
    UserModule
    //modules importing ended
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
