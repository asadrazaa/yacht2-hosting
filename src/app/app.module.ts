import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

//CHART
import { NgChartsModule } from 'ng2-charts';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';

//GENERAL PAGES
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './pages/test/test.component';

//AGENT PAGES
import { HomeComponent } from './pages/agent/home/home.component';
import { BoatListComponent } from './pages/agent/boat-list/boat-list.component';
import { BookingDetailComponent } from './pages/agent/booking-detail/booking-detail.component';

//ADMIN PAGES
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,

    //COMPONENTS
    HeaderComponent,

    //GENERAL PAGES
    LoginComponent,
    TestComponent,

    //AGENT PAGES
    HomeComponent,
    BoatListComponent,
    BookingDetailComponent,

    //ADMIN 
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //CHART
    NgChartsModule,
    
    //PWA
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
