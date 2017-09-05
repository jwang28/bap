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
    speed: number = 0.3;
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
    setWidth: any = .2;
    aboutTop: any;
    is_safari: any = (navigator.userAgent.indexOf("Safari") > -1) && navigator.userAgent.indexOf('Chrome') == -1;

    @ViewChild('bgDiv1') ele: ElementRef;
    @ViewChild('bgDiv2') ele2: ElementRef;
    @ViewChild('about') ele3: ElementRef;
    children: Array<ElementRef>;
    
  ngOnInit() {
    this.children = [this.ele,this.ele2];
    this.execute();
    this.aboutTop = this.ele3.nativeElement.getBoundingClientRect().top;

    this.setWidth = (window.innerWidth < 768) ? .4 : .2;
    this.width = (window.innerWidth * this.setWidth) * 1;
    this.lineWidth = this.width + "px";
    console.log("safari: " + this.is_safari);
  }

  toLogin(){
    this.router.navigateByUrl('/login');
  }

  scrollDown(){
   
    this.aboutTop = window.pageYOffset + this.ele3.nativeElement.getBoundingClientRect().top - 50;
    window.scrollTo(0,this.aboutTop);

  }

  execute(){
    if (window.innerWidth > 768 && !this.is_safari){
      for (var i = 0; i < this.children.length; i++) {
        this.divTop = this.children[i].nativeElement.getBoundingClientRect().top;
        this.divBottom = this.children[i].nativeElement.getBoundingClientRect().bottom;
        this.div = this.divBottom-this.divTop;



        //check if top of element is scrolled in view height

        if((window.innerHeight -  this.divTop) >= 0 && ((window.innerHeight-this.divTop) < (window.innerHeight+this.div))){
          //check if bottom of element is still in view height
          this.scroll = (this.divBottom < 0) ? 0 : (window.innerHeight - this.divTop);
          this.offset = -this.scroll*this.speed;
          this.offsetPx = this.offset + "px";
          this.div = this.divBottom-this.divTop;

          //length of separators in title
          this.setWidth = (window.innerWidth < 768) ? .4 : .2;
          /*console.log("it is here " + this.setWidth);*/
          
          switch (i){
            case 0:
              this.bottom1 = this.offsetPx;
              this.opacity1 = (this.divBottom-(this.div * (1-this.fadeHeight)))/(this.div * this.fadeHeight);
              
              this.width = (window.innerWidth* this.setWidth) * this.opacity1;
         
              this.lineWidth = this.width + "px";
           
              
              break;
            case 1: 
              this.bottom2 = this.offsetPx;
              this.opacity2 = (this.divBottom-(this.div * (1-this.fadeHeight)))/(this.div * this.fadeHeight);
          }
          /*console.log("div 1 is: " + this.bottom1);
          console.log("div 2 is: " + this.bottom2);*/
        }
      }
    }
  }
}
