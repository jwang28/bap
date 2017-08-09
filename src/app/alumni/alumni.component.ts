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
	  	speed: number = 0.5;
		top1: any;
		top2: any=0;
		scrollY: any;
		start1: number = 0;
		start2: number = 0;
		bottom1: any =0;
		bottom2: any;
		height: any;
		scroll: any;
		offset: any;

		@ViewChild('test') ele: ElementRef;
		@ViewChild('test2') ele2: ElementRef;
		children: Array<ElementRef>;
		bottomPos: any[] =[];
		
	  ngOnInit() {
	  	/*console.log(this.ele.nativeElement.getBoundingClientRect().top);
	  	console.log(this.ele2.nativeElement.getBoundingClientRect().top);*/
	  	/*this.start2 = this.ele2.nativeElement.getBoundingClientRect().top;*/
	  	this.children = [this.ele,this.ele2];
	  	this.bottomPos = [this.bottom1, this.bottom2];
	  	console.log(this.bottomPos[1]);
	  }

	  execute(evt){
	  	
	   /* console.log("scrollTop is: " + document.body.scrollTop);

	    console.log("scroll Y is: " + window.scrollY.valueOf());*/
	   /* console.log("ele is: " + this.ele.nativeElement.getBoundingClientRect().top);
	    console.log("first child in array: " + this.children[0].nativeElement.getBoundingClientRect().top);*/

	    for (var i = 0; i < this.children.length; i++) {
	    	// code...
	    	if((window.innerHeight -  this.children[i].nativeElement.getBoundingClientRect().top) > 0){
	    		this.scroll = (this.children[i].nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top);

		    	this.offset = -this.scroll*this.speed;
		    	
		    	this.bottomPos[i] = (this.offset + "px"); 
		    	console.log("bottom" + i + " is: " + this.bottomPos[i]);
		    	
		    	if(i == 1){this.bottom2 = (this.offset+ "px")}
		    		else{
		    			this.bottom1=this.offset+"px"
		    		}
		    	console.log("b1: " + this.bottom1);
		    	console.log("b2: " + this.bottom2);
	    	}
	    }

	    /*this.height = window.innerHeight;
	    console.log("ele2: " + this.ele2.nativeElement.getBoundingClientRect().top + " " + window.innerHeight);

	    this.scrollY = window.scrollY.valueOf() % window.innerHeight.valueOf();
	   	

	    this.top1 = -this.scrollY/this.speed;

	    this.scroll = (this.ele2.nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.ele2.nativeElement.getBoundingClientRect().top);

	    console.log(this.scroll);
	   	if((window.innerHeight -  this.ele2.nativeElement.getBoundingClientRect().top) > 0){
	    	this.top2 = -this.scroll*this.speed;
	    	console.log("reset to " + this.top2);
	    }
	    
	    //console.log("top is: " + this.top1);
	    this.bottom1 = this.sanitizer.bypassSecurityTrustStyle(this.top1 + "px"); 
	    this.bottom2 = this.sanitizer.bypassSecurityTrustStyle(this.top2 + "px"); */
	  }


}

