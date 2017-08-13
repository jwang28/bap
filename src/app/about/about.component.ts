import { Component, OnInit, ElementRef, HostListener, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
  	'(window:scroll)': 'execute()',
    '(window:load)': 'execute()',
  }
})
export class AboutComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private el:ElementRef) {}
    speed: number = 0.5;
    bottom1: string;
    bottom2: string;
    scroll: any;
    offset: any;
    offsetPx: string;

    @ViewChild('bgDiv1') ele: ElementRef;
    @ViewChild('bgDiv2') ele2: ElementRef;
    children: Array<ElementRef>;
    
  ngOnInit() {
    this.children = [this.ele,this.ele2];
    this.execute();
  }

  execute(){
    console.log("onload");
      for (var i = 0; i < this.children.length; i++) {
        
        if((window.innerHeight -  this.children[i].nativeElement.getBoundingClientRect().top) >= 0){
          this.scroll = (this.children[i].nativeElement.getBoundingClientRect().bottom < 0) ? 0 : (window.innerHeight - this.children[i].nativeElement.getBoundingClientRect().top);

          this.offset = -this.scroll*this.speed;
          
          this.offsetPx = this.offset + "px";
          
          switch (i){
            case 0:
              this.bottom1 = this.offsetPx;
              break;
            case 1: 
              this.bottom2 = this.offsetPx;
          }
        }
     }
  }
}
