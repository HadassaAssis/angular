export enum hobbies{reading,writing,music,learning,sleeping}
export const hobbiesArr=<string[]>Object.values(hobbies).filter((a)=>typeof(a)=='string')
//the base colors:
export const colors={ 
    aqua: '#0ff000',
    black: '#000000',
    blue: '#00f000',
    fuchsia: '#f0f000',
    gray: '#808080',
    green: '#008000',
    lime: '#0f0000',
    maroon: '#800000',
    navy: '#000080',
    olive: '#808000',
    orange: '#ffa500',
    purple: '#800080',
    red: '#f00000',
    silver: '#c0c0c0',
    teal: '#008080',
    white: '#fff000',
    yellow: '#ff0000'
} 
//element of user(all the details from form)
export interface user{
    f_name:string;
    l_name:string;
    email:string;
    seats:string;
    color:string;
    gander:string;
    motor:string;
    hobbiesList:string[];
    postalCode:string;
    city:string;
    state:string;
    date:string;
    lat:number;
    lng:number
}
//type to display the table
export interface UserData {
    country: string;
    gander: string;
    seats: number;
    hobby: string;
    motor:string;
  }