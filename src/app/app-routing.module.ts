import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'/contacts/login',pathMatch:'full'},
  {path:'contacts/save',component:LoginComponent},
  {path:'contacts/login',component:SignupComponent},
  {path:'contacts/home',component:ContactManagerComponent},
  {path:'contacts/add',component:AddContactsComponent},
  {path:'contacts/edit/:id',component:EditContactComponent},
  {path:'contacts/view/:id',component:ViewContactComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
