import { Injectable } from '@angular/core';
import { hobbiesArr, user, UserData } from './classes';
import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class ConectToFireBaseService {
  
  //all details:
  userDetails:user[]=[]
  constructor() {
    this.getAllUser()
    //console.log(this.userDetails)
  }

  //---save details---:
  public addUser(user:object){
    const thisUser=JSON.stringify(user)
    var u=window.localStorage.getItem('users')
    let users=u?u+thisUser+',':thisUser+',';
    window.localStorage.setItem('users',users );
  }

  //---get data---:
  //motor
  public getGenderMotor(){
    const gender=(x:string)=>x=='female'?0:1
    const motor=(x:string)=>x=='electric'?0:1
    var result=[[0,0],[0,0]]
    this.userDetails.forEach(x=>result[gender(x['gander'])][motor(x['motor'])]++)
    return result
  }

  //hoobies pie:
  public getHobbiesPie(){
    var result=new Array(hobbiesArr.length).fill(0)
    this.userDetails.forEach(x=>x.hobbiesList.forEach(h=>result[hobbiesArr.indexOf(h)]++))
    return result
  }

  //table:
  public getDetailsPerCountry(){
    const average = (arr: any[]) => arr.reduce( ( p, c ) => eval(p +'+'+c), 0 ) / arr.length;//get avarge of array
    const grouped = _.groupBy(this.userDetails, user => user.state);//the details groupby country
    var result:UserData[]=[]
    Object.entries(grouped).map((k) => {
      var g=this.mode(k[1].map(x=>x.gander))//the mosot popular gander
      var m=this.mode(k[1].map(x=>x.motor))//the most popular motor
      var h=this.mode([].concat.apply([],<ConcatArray<never>[]><unknown>k[1].map(x => x.hobbiesList)))//the most popular hobby
      var s=Math.round(average(k[1].map(x=>x.seats)))//the avarage of seats
      result.push({country:k[0],gander:g,motor:m,hobby:h,seats:s})
    })
    return result
  }

  //popular colors per age:
  public getThreeMostFrequentByAge(){
    let result=new Array(3).fill([])
    result.forEach((x,i)=>result[i]=new Array(10).fill(0))
    this.userDetails.forEach(x=>{
      if (this.getThreeCommonColor().includes(x.color)){
      let i=this.getThreeCommonColor().indexOf(x.color)
      result[i][this.getTheAgeRange(x.date)]++}
     })
    return result
  }

  //user connection
  public getTheTotalCOnnectionDetaild(){
    //'onlyConnect' :user only visit landing page
    //'sendSuccessfuly' :user send form successfuly
    let onlyConnect=<number><unknown>window.localStorage.getItem('onlyConnect')
    let sendSuccessfuly=<number><unknown>window.localStorage.getItem('sendSuccessfuly')
    return [{name:'Connect',value:onlyConnect?onlyConnect:0},{name:'Success',value:sendSuccessfuly?sendSuccessfuly:0}]
  }

  //update data when complite form sucssesfuly
  public setDetailsOfConnection(){ 
    //If the form submitted is first submitted in a browser, the number of visitors who did not submit the form successfully should be lowered.
    //Update the entry that a form was submitted for the first time 
    //(the number is not significant unless this entry has already been entered)
    this.addLessLocalStorge('theFirstUser',1)
    this.addLessLocalStorge('sendSuccessfuly',1)
    if (!window.localStorage.getItem('theFirstUser'))
        this.addLessLocalStorge('onlyConnect',-1)
  }

  //update data when enter to landingpage
  public setDetailsOfUserFormsAtConnetion(){
    //Check if there was another login, otherwise any browser refresh will be considered as a new user
    if (!window.localStorage.getItem('ifConnect'))
      this.addLessLocalStorge('onlyConnect',1)
    this.addLessLocalStorge('ifConnect',-1)
  }

  //the popular city:
  public getPopularCity(){
    let arr=this.userDetails.map(x=>x.city+' '+ x.state)
    let i=arr.indexOf(this.mode(arr))
    return {lat:this.userDetails[i].lat,lng:this.userDetails[i].lng}
  }
  //--help function--:
  //build the data
  public getAllUser(){
    let arr=window.localStorage.getItem('users')?.split('},');
    arr?.pop()
    console.log(arr)
    arr?.forEach((x)=>this.userDetails.push(<user><unknown>JSON.parse(x+'}')) )
  }

  //return the 3 most popular color(from 17 colors)
  public getThreeCommonColor(){
    let arr=this.userDetails.map(x=>x.color)
    let mp=new Map();
        for (let i = 0; i < arr.length; i++) {
            if(!mp.has(arr[i]))
                mp.set(arr[i],0);
            mp.set(arr[i],
                   mp.get(arr[i]) + 1);
        }
        let queue=[...mp];  
        queue.sort((a,b)=>{
            if(a[1]==b[1])
                return b[0]-a[0];
            else
                return b[1]-a[1];
        });
        return <string[]>queue.slice(0,3).map(x=>x[0])
  }

  //return the nearest ten 
  private getTheAgeRange(birthday:string){
    var age=moment().diff(moment(birthday, 'YYYYMMDD'), 'years')
    return Math.round(age/10) 
  }

  //return the most popular element from an array 
  private mode = (myArray:any) =>
     myArray.reduce(
      (a:any,b:any,i:any,arr:any)=>
      (arr.filter((v: any)=>v===a).length>=arr.filter((v: any)=>v===b).length?a:b),
      null)
    
  //to add or less from localstorage
  private addLessLocalStorge=((k:string,v:number)=>{
    let key=window.localStorage.getItem(k)
    let a=key?eval(key+'+'+v):1
    console.log(a)
    window.localStorage.setItem(k,a+'')
  })
   
}
