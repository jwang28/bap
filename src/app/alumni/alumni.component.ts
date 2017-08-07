import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css'],
  host: {
  	'(window:scroll)': 'execute($event)'
  }
})
export class AlumniComponent implements OnInit {
	constructor(private sanitizer: DomSanitizer) { }
	  setSpeed: number = 2;
		top1: any;
		top2:any;
		scrollY: any;
		start1: number = -100;
		start2: number= -100;
		end1: any;
		end2: any;
		
	  ngOnInit() {
	  }

	  execute(evt){
	  	
	    console.log("scrollTop is: " + document.body.scrollTop);

	    console.log("scroll Y is: " + window.scrollY.valueOf());
	    
	    this.scrollY = window.scrollY.valueOf() % window.innerHeight.valueOf();
	   	

	    this.top1 = this.start1 + this.scrollY/this.setSpeed;
	    this.top2 = this.start1 + this.scrollY/this.setSpeed;

	    //console.log("top is: " + this.top1);
	    this.end1 = this.sanitizer.bypassSecurityTrustStyle(this.top1 + "px"); 
	    this.end2 = this.sanitizer.bypassSecurityTrustStyle(this.top2 + "px"); 
	    //console.log(this.end1);
	
	  }


}

