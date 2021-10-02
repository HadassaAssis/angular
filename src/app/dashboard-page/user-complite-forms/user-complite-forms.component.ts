import { Component, OnInit } from '@angular/core';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-user-complite-forms',
  templateUrl: './user-complite-forms.component.html',
  styleUrls: ['./user-complite-forms.component.css']
})
export class UserCompliteFormsComponent implements OnInit {

  constructor(private service:ConectToFireBaseService) { }

  ngOnInit(): void {
  }
  saleData =this.service.getTheTotalCOnnectionDetaild() //the data to display the template--{name:string,value:number}--
}
