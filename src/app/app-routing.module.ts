import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'user', component:UserComponent,canActivate: [authGuard],data: { Role: 'user' }},
  {path : 'admin', component:AdminComponent,canActivate: [authGuard],data: { Role: 'admin' }},
  {path : 'landing', component : LandingPageComponent},
  {path : 'user-page', component : UserpageComponent, canActivate: [authGuard],data: {Role : 'user'}},
  {path : 'admin-page', component : AdminpageComponent,canActivate : [authGuard],data: {Role : 'admin'}},
  {path : 'test', component : TestingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
