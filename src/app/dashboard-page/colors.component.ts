import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-colors',
  template:`<div 
            [style.background]="'linear-gradient(to right,'+colors+')'"
            style="height: 20px;">
            </div>`,
  styles:[]
})
export class ColorsComponent implements OnInit {
  colors = ["white","silver","grey","black","maroon","red","orange","yellow","lime"
  ,"green","olive","aqua","teal","navy","blue","purple","fuchsia"] 
  ngOnInit(): void {
  }


}
