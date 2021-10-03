import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-most-visitor-city',
  templateUrl: './most-visitor-city.component.html',
  styleUrls: ['./most-visitor-city.component.css']
})
export class MostVisitorCityComponent implements OnInit {
  lat!:number
  lng!:number
  mapOptions: google.maps.MapOptions = {
    center: this.service.getPopularCity() ,
    zoom : 10
  }
  //the position of the marker
  marker = {
      position: this.service.getPopularCity(),
  } 
  constructor(private service:ConectToFireBaseService) { 

  }
  ngOnInit(): void {
    
  }

}
