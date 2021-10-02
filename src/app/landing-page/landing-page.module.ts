//‏
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//the components:
import { FormSelectBirthdateComponent } from './birthDate/select-date.component';
import { DetailsComponent } from './details/details.component';
import { AutocompleteComponent } from './googlePlace';
//materials:
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { ConectToFireBaseService } from '../conect-to-fire-base.service';


@NgModule({
  declarations: [DetailsComponent,FormSelectBirthdateComponent,AutocompleteComponent],
  imports: [
    CommonModule,FormsModule,MatFormFieldModule,MatCardModule
    ,MatInputModule,ReactiveFormsModule,MatRadioModule,MatDividerModule,MatListModule
    ,MatSelectModule,BrowserAnimationsModule,MatButtonModule,MatSnackBarModule
  ],
  exports:[DetailsComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    ConectToFireBaseService
  ],
})
export class LandingPageModule { }
