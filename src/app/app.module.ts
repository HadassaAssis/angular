import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
//the moduls of 2 page:
import { LandingPageModule } from './landing-page/landing-page.module'
import { DashboardModule } from './dashboard-page/dashboard.module';
//the load componnents
import { DetailsComponent } from './landing-page/details/details.component';
import { DashboardHomepageComponent } from './dashboard-page/dashboard-homepage/dashboard-homepage.component';
//the service
import { ConectToFireBaseService } from './conect-to-fire-base.service';

const PATHS:Routes=[
  {path:'landingpage',component:DetailsComponent},
  {path:'dashboard',component:DashboardHomepageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,LandingPageModule,DashboardModule,
    RouterModule.forRoot(PATHS)

  ],
  bootstrap: [AppComponent],
  providers:[ConectToFireBaseService]
})
export class AppModule { }
