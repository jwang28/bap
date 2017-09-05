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
      return items.slice(14, 19);
    }else if(filter == 5){
      return items.slice(19, 22);
    }else if(filter == 6){
      return items.slice(22, 25);
    }else if(filter == 7){
      return items.slice(25, 29);
    }else if(filter == 8){
      return items.slice(29, 32);
    }else if(filter == 9){
      return items.slice(32, 35);
    }else if(filter == 10){
      return items.slice(35, 39);
    }else if(filter == 11){
      return items.slice(39, 42);
    }else if(filter == 12){
      return items.slice(42, 46);
    }else{
      return items.slice(0,46);
    } 
  }
}