declare var require: any
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { colors, hobbiesArr } from 'src/app/classes';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';
import { FormSelectBirthdateComponent } from '../birthDate/select-date.component';

@Component({
  selector: 'landingPage-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  address!: google.maps.places.PlaceResult;//save the place from googlemaps
  constructor(private _snackBar: MatSnackBar,private service:ConectToFireBaseService){
    //this.service.getAllUser()
  }
  ngOnInit():void{
    //update data- numbers of users open the loadinf page
     this.service.setDetailsOfUserFormsAtConnetion()
  }

  //reference to the dateBirthComponent

  @ViewChild(FormSelectBirthdateComponent)
  DateBirthDetails!:FormSelectBirthdateComponent
  
  hobbies=hobbiesArr//to display all hobbies
  //to get the nearest color to the shade that entered
  closestColor =  require('nearest-color').from(colors);

  //controls:
  detailsForm=new FormGroup({
    f_name:new FormControl('',[Validators.required]),
    l_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    seats:new FormControl('',[Validators.required]),
    color:new FormControl('',[Validators.required]),
    gander:new FormControl('',[Validators.required]),
    motor:new FormControl('',[Validators.required]),
    hobbiesList:new FormControl('',[Validators.required])
  })

  //--funtions--

  //error
  getErrorMassage():string{
    if (this.detailsForm.hasError('required'))
      return "The form is incomplete"
    return "the form is not correct"
  }
  //reset and sumbit
  reset():void{
    this.detailsForm.reset()
    this.DateBirthDetails.dateBirthForm.reset()
  }

  sumbit():void{
    if (this.detailsForm.invalid || this.DateBirthDetails.dateBirthForm.invalid ||!this.address)
      this.openSnackBar(this.getErrorMassage())
    else {
      this.openSnackBar('your details saved you would get an amail soon')
      this.setTheDedails()//save at localstorage
      this.service.setDetailsOfConnection()//update the data of connction successfuly
    }
  }

  //save the details at localstorge
  setTheDedails(){
    var datebirth=this.DateBirthDetails.dateBirthForm.value 
    var date=new Date(<number><unknown>datebirth['years'],<number><unknown>datebirth['months'],<number><unknown>datebirth['days'])
    var lng = this.address.geometry?.location.lng();
    var lat = this.address.geometry?.location.lat();
    var adr=this.address.formatted_address?.split(',')
    var city=adr?adr[1]:''
    var state=adr?adr[2]:''
    var controls={...this.detailsForm.value,date,lng,lat,city,state}
    controls['color']=this.closestColor(controls['color']).name //change the enterd color to the nearst 17 colors
    this.service.addUser(controls)
  }
  
  //the message
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Donce');
  }

  getAddress(place: google.maps.places.PlaceResult) { 
   this.address = place
 
  }
}
