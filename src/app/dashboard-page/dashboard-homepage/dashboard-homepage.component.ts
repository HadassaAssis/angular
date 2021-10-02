import { Component, OnInit } from '@angular/core';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-dashboard-homepage',
  templateUrl: './dashboard-homepage.component.html',
  styleUrls: ['./dashboard-homepage.component.css']
})
export class DashboardHomepageComponent implements OnInit {

  constructor(private service:ConectToFireBaseService) { }

  ngOnInit(): void {

  }

}
