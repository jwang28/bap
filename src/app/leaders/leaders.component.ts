import { Component, OnInit } from '@angular/core';
import { CarouselModule,GrowlModule } from 'primeng/primeng';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

	HiddenPE: boolean=true;
	HiddenSE: boolean=true;
	HiddenCS: boolean=true;
	items: any;
	cars: Array<any>;
	msgs: Array<any>;

  /*  msgs: Message[];*/

  constructor() {
  /*	this.msgs = [];*/
    this.cars = [
        {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
        {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
        {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
        {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
        {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'}
    ];

    console.log(this.cars);

  }

 /* selectCar(car: Car) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin});
  }*/

  ngOnInit() {
  }

}
