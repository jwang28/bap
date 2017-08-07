import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
  	'(window:scroll)': 'execute($event)'
  }
})
export class AboutComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  setSpeed: number = 100;
	speed: any;
	scrollY: any;
	bgPos: any;
  ngOnInit() {
  }

  execute(evt){
    console.log("scrollTop is: " + evt.target.scrollTop);
    console.log(window.scrollY.valueOf());
    /*this.scrollY = window.scrollY.valueOf();
    if (this.scrollY === 0){
      this.speed = 0;
    }
    else{
      this.speed = this.scrollY/this.setSpeed;
    }
    console.log("speed is: " + this.speed);
    this.bgPos = this.sanitizer.bypassSecurityTrustStyle("0%  "+ this.speed+ "%"); 
    console.log(this.bgPos);
*/
  }

}
