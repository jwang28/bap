import { Component, OnInit, ElementRef, HostListener, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
  	'(window:scroll)': 'execute($event)',
    '(window:resize)': 'execute($event)'
  }
})
export class HomeComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer, private el:ElementRef, private router: Router) {}
    speed: number = 0.5;
    bottom1: string;
    bottom2: string;
    scroll: any;
    offset: any;
    offsetPx: string;
    opacity1: any = 1;
    opacity2: any = 1;
    divBottom: any;
    divTop: any;
    div: any;
    fadeHeight = .4;
    width: any;
    lineWidth: any;

    @ViewChild('bgDiv1') ele: ElementRef;
    @ViewChild('bgDiv2') ele2: ElementRef;
    children: Array<ElementRef>;
    
  ngOnInit() {
    this.children = [this.ele,this.ele2];
    this.execute();
  }

  toLogin(){
    this.router.navigateByUrl('/login');
  }

  execute(){
      for (var i = 0; i < this.children.length; i++) {
        this.divTop = this.children[i].nativeElement.getBoundingClientRect().top;
        this.divBottom = this.children[i].nativeElement.getBoundingClientRect().bottom;
        this.div = this.divBottom-this.divTop;



        //check if top of element is scrolled in view height
        if((window.innerHeight -  this.divTop) >= 0){
          //check if bottom of element is still in view height
          this.scroll = (this.divBottom < 0) ? 0 : (window.innerHeight - this.divTop);
          this.offset = -this.scroll*this.speed;
          this.offsetPx = this.offset + "px";
          this.div = this.divBottom-this.divTop;
          
          switch (i){
            case 0:
              this.bottom1 = this.offsetPx;
              this.opacity1 = (this.divBottom-(this.div * (1-this.fadeHeight)))/(this.div * this.fadeHeight);
              this.width = (window.innerWidth*.2) * this.opacity1;
              this.lineWidth = this.width + "px";
              
              break;
            case 1: 
              this.bottom2 = this.offsetPx;
              this.opacity2 = (this.divBottom-(this.div * (1-this.fadeHeight)))/(this.div * this.fadeHeight);
          }
        }
      }
  }

/*setSpeed: number = 7;
speed: any;
scrollY: any;
bgPos: any;
  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
  }

  toLogin(){
    this.router.navigateByUrl('/login');
  }
  
  execute(evt){
  	console.log(window.scrollY.valueOf());
  	this.scrollY = window.scrollY.valueOf();
  	if (this.scrollY === 0){
  		this.speed = 0;
  	}
  	else{
  		this.speed = this.scrollY/this.setSpeed;
  	}
  	console.log("speed is: " + this.speed);
  	this.bgPos = this.sanitizer.bypassSecurityTrustStyle("0%  "+ this.speed+ "%"); 
  	console.log(this.bgPos);

  }*/

}
