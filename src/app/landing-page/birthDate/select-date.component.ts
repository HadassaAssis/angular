import {Component,OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'select-birthdate',
  styles: [],
  templateUrl: './select-birthdate.component.html',
  styleUrls: [ ]
})

export class FormSelectBirthdateComponent implements OnInit {
  //controls
  dateBirthForm=new FormGroup({
    days:new FormControl('',Validators.required),
    months:new FormControl('',Validators.required),
    years:new FormControl('',Validators.required)
  })

  date=new Date()
  selectedDay:string='';
  selectedMonth:string='';
  selectedYear:string='';
  thisYear = moment().year();
  days :number []=[];
  years :number []=[];
  months = [
    { name: 'January', viewValue: '01', days: new Array},
    { name: 'February', viewValue: '02', days: new Array },
    { name: 'March', viewValue: '03', days: new Array },
    { name: 'April', viewValue: '04', days: new Array },
    { name: 'May', viewValue: '05', days: new Array },
    { name: 'June', viewValue: '06', days: new Array },
    { name: 'July', viewValue: '07', days: new Array },
    { name: 'August', viewValue: '08', days: new Array },
    { name: 'September', viewValue: '09', days: new Array },
    { name: 'October', viewValue: '10', days:new Array },
    { name: 'November', viewValue: '11', days: new Array },
    { name: 'December', viewValue: '12', days:new Array }
  ];
  ngOnInit() {
    this.updateDays('01');
    this.selectedMonth = '';
    for (let i = 1950 ; i <= this.thisYear ; i++) {
      this.years.push(i);
    }
    this.years.reverse();
    for (let month of this.months) {
      let daysInMonth = moment('2017-' + month.viewValue, 'YYYY-MM').daysInMonth();
      for ( let i = 1; i <= daysInMonth; i++ ) {
        month.days.push(i);
      }
    }
  }

  updateDays(newValue:string) {
    this.selectedMonth = newValue;
    const res = this.months.filter( (month) =>
    month.viewValue === this.selectedMonth);
    if (res.length) 
      this.days = res.pop()!.days;
    else {
      // reset form was clicked
      this.days = [];
      this.selectedMonth = '';
      this.updateDays('01');
    }
  }
}