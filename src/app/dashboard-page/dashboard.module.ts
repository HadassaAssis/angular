import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//the components:
import { MostPickedColorComponent } from './most-picked-color/most-picked-color.component';
import { EngineByGenderComponent } from './engine-by-gender/engine-by-gender.component';
import { MostCommonHobbyComponent } from './most-common-hobby/most-common-hobby.component';
import { DetailsPerCountryComponent } from './details-per-country/details-per-country.component';
import { MostVisitorCityComponent } from './most-visitor-city/most-visitor-city.component';
import { DashboardHomepageComponent } from './dashboard-homepage/dashboard-homepage.component';
import { UserCompliteFormsComponent } from './user-complite-forms/user-complite-forms.component';
import { ColorsComponent } from './colors.component';
//materials:
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule,MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
//grapgs:
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    MostPickedColorComponent,
    EngineByGenderComponent,
    MostCommonHobbyComponent,
    DetailsPerCountryComponent,
    MostVisitorCityComponent,
    DashboardHomepageComponent,
    UserCompliteFormsComponent,
    ColorsComponent
  ],
  imports: [
    CommonModule,MatCardModule,NgxChartsModule,ChartsModule,MatTableModule
    ,MatPaginatorModule,MatSortModule,MatFormFieldModule,BrowserAnimationsModule
    ,MatInputModule,MatToolbarModule ,GoogleMapsModule,MatDividerModule   
  ],
  exports:[
    DashboardHomepageComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'legacy'}}
  ],
})
export class DashboardModule { }
