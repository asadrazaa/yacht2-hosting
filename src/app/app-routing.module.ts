import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//GENERAL PAGES
import { LoginComponent } from './auth/login/login.component';

//AGENT PAGES
import { HomeComponent } from './pages/agent/home/home.component';
import { BoatListComponent } from './pages/agent/boat-list/boat-list.component';
import { BookingDetailComponent } from './pages/agent/booking-detail/booking-detail.component';

//ADMIN PAGES
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

const routes: Routes = [
  //GENERAL PAGES
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  //AGENT PAGES
  {path: 'home', component: HomeComponent },
  {path: 'boat-list', component: BoatListComponent },
  {path: 'booking-detail', component: BookingDetailComponent },

  //ADMIN PAGES
  {path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
