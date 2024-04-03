import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookComponent } from './Components/book/book.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { ViewBookComponent } from './Components/view-book/view-book.component';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'forgot', component:ForgotPasswordComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'book', component:BookComponent},
  {path: 'display', component:DisplayBookComponent},
  {path: 'viewbook', component:ViewBookComponent},
  {path: 'personal', component:PersonalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
