import { Component, OnInit, ElementRef, HostListener, ViewChild} from '@angular/core';
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
	 

	constructor(private sanitizer: DomSanitizer, private el:ElementRef) { }
	  setSpeed: number = 1.5;
		top1: any;
		top2: any=0;
		scrollY: any;
		start1: number = 0;
		start2: number = 0;
		end1: any;
		end2: any;
		height: any;
		offset: any;
		@ViewChild('test') ele: ElementRef;
		@ViewChild('test2') ele2: ElementRef;
		
	  ngOnInit() {
	  	console.log(this.ele.nativeElement.getBoundingClientRect().top);
	  	console.log(this.ele2.nativeElement.getBoundingClientRect().top);
	  	/*this.start2 = this.ele2.nativeElement.getBoundingClientRect().top;*/
	  }

	  execute(evt){
	  	
	   /* console.log("scrollTop is: " + document.body.scrollTop);

	    console.log("scroll Y is: " + window.scrollY.valueOf());*/

	    this.height = window.innerHeight;
	    console.log("ele2: " + this.ele2.nativeElement.getBoundingClientRect().top + " " + window.innerHeight);

	    this.scrollY = window.scrollY.valueOf() % window.innerHeight.valueOf();
	   	

	    this.top1 = -this.scrollY/this.setSpeed;

	    this.offset = (this.ele2.nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.ele2.nativeElement.getBoundingClientRect().top);

	    console.log(this.offset);
	   	if((window.innerHeight -  this.ele2.nativeElement.getBoundingClientRect().top) > 0){
	    	this.top2 = 200-this.offset*0.5;
	    	console.log("reset");
	    }
	    
	    //console.log("top is: " + this.top1);
	    this.end1 = this.sanitizer.bypassSecurityTrustStyle(this.top1 + "px"); 
	    this.end2 = this.sanitizer.bypassSecurityTrustStyle(this.top2 + "px"); 
	  }


}

