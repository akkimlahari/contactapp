import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactsComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PagenotfoundComponent,
    LoginComponent,
    HomeComponent,
    FilterPipe,
    SearchComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
