


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
 
/**Componenets */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { AddMentorComponent } from './add-mentor/add-mentor.component';
 
const routes: Routes = [
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{
path: 'login',
component: LoginComponent
},
{
path: 'register',
component: RegisterComponent
},
{
    path: 'mentor',
    component: MentorComponent
    },
    {
        path: 'add',
        component: AddMentorComponent
        },
{ path: '**', redirectTo: '' }
 
];
 
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }