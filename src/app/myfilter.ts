import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter'
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {

    /*if(filter == 1){
      return items.slice(0, 3);
    }else if(filter == 2){
      return items.slice(3, 9);
    }else if(filter == 3){
      return items.slice(9, 13);
    }else if(filter == 4){
      return items.slice(13, 18);
    }else if(filter == 5){
      return items.slice(18, 21);
    }else if(filter == 6){
      return items.slice(21, 24);
    }else if(filter == 7){
      return items.slice(24, 28);
    }else if(filter == 8){
      return items.slice(28, 31);
    }else if(filter == 9){
      return items.slice(31, 34);
    }else if(filter == 10){
      return items.slice(34, 38);
    }else if(filter == 11){
      return items.slice(38, 41);
    }else if(filter == 12){
      return items.slice(41, 45);
    }else{
      return items.slice(0,45);
    } */
       
    //old filter with 4 CMs
    if(filter == 1){
      return items.slice(0, 4);
    }else if(filter == 2){
      return items.slice(4, 10);
    }else if(filter == 3){
      return items.slice(10, 14);
    }else if(filter == 4){
      return items.slice(14, 20);
    }else if(filter == 5){
      return items.slice(20, 23);
    }else if(filter == 6){
      return items.slice(23, 26);
    }else if(filter == 7){
      return items.slice(26, 30);
    }else if(filter == 8){
      return items.slice(30, 33);
    }else if(filter == 9){
      return items.slice(33, 36);
    }else if(filter == 10){
      return items.slice(36, 40);
    }else if(filter == 11){
      return items.slice(40, 46);
    }else if(filter == 12){
      return items.slice(46, 50);
    }else if(filter == 13){
      return items.slice(50, 53);
    }else{
      return items.slice(0,53);
    } 
  }
}