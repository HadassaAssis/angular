import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { colors, hobbies, hobbiesArr } from 'src/app/classes';
import { ConectToFireBaseService } from 'src/app/conect-to-fire-base.service';

@Component({
  selector: 'dashboard-most-common-hobby',
  templateUrl: './most-common-hobby.component.html',
  styleUrls: ['./most-common-hobby.component.css']
})
export class MostCommonHobbyComponent implements OnInit {

  constructor(private service:ConectToFireBaseService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
  }
  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartLabels: Label[] = hobbiesArr;
  pieChartData: SingleDataSet = this.service.getHobbiesPie();
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  chartColor:Color[]=[{backgroundColor:['#A8385D','#C77F97','#AAE3F5','#7AA3E5','#A27EA8','#A95963','#ADCDED']}]



}


