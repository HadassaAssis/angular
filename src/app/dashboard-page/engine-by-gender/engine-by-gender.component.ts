import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-engine-by-gender',
  templateUrl: './engine-by-gender.component.html',
  styleUrls: ['./engine-by-gender.component.css']
})
export class EngineByGenderComponent implements OnInit {

  constructor(private service:ConectToFireBaseService) { }

  ngOnInit(): void {
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public doughnutChartLabels: Label[] = ['electric', 'fuel'];
  public doughnutChartData: MultiDataSet = this.service.getGenderMotor()
  public doughnutChartType: ChartType = 'doughnut';
  chartColor:Color[]=[{backgroundColor:["#C77F97", "#ABC5EE"]},{backgroundColor:["#C77F97", "#ABC5EE"]}]
}
