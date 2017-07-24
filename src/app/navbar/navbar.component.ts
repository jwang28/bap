import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
  	'(window:scroll)': 'updateHeader($event)'
  }
})
export class NavbarComponent implements OnInit {
	isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 50;


  constructor() { }


  ngOnInit() {
  }

  updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
            console.log(this.isScrolled);
        } else {
            this.isScrolled = false;
            console.log(this.isScrolled);
        }
    }
    /*updateHeader(evt) {
        
            this.isScrolled = false;
    }*/

}
