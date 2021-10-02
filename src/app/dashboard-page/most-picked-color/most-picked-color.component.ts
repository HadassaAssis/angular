
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { colors } from 'src/app/classes';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-most-picked-color',
  templateUrl: './most-picked-color.component.html',
  styleUrls: ['./most-picked-color.component.css']
})
export class MostPickedColorComponent implements OnInit {

  constructor(private service:ConectToFireBaseService) { }

  ngOnInit(): void {
    let arr=this.service.getThreeCommonColor()
    this.service.getThreeMostFrequentByAge().forEach((x,i)=>this.lineChartData.push({data:x,label:arr[i]}))
    arr.forEach(x=>this.lineChartColors
      .push({borderColor:colors[x as keyof typeof colors]+'80',backgroundColor:colors[x as keyof typeof colors]+'80'}))
      
  }

  lineChartData: ChartDataSets[] = []
  lineChartLabels: Label[] = ['0','10', '20', '30', '40', '50', '60', '70','80','90'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [ ];
  lineChartLegend = true;
  lineChartType:ChartType = 'line';
  public lineChartPlugins = [];

}
