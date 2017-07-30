import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
  	'(window:scroll)': 'updateHeader($event)',
  	'(window:resize)': 'updateHeader($event)',
  	'(window:onload)': 'updateHeader($event)'
  }
})
export class NavbarComponent implements OnInit {
  	isExpanded = false;
	isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 50;
    notHome = false;
    src: String = "../../assets/images/bapWhite.png";


  constructor(private router: Router) {
  	router.events.subscribe((event) => {
  		if (router.url !== '/'){
  			this.notHome = true;
  			this.src = "../../assets/images/bap.png";
  		}
  	});
   }


  ngOnInit() {
  }
  checkExpanded() {
  	if (window.innerWidth < 768){
  		this.isExpanded = !this.isExpanded;
  		if (this.isExpanded || (!this.notHome && (window.pageYOffset < this.changePos))){
  			this.src = "../../assets/images/bapWhite.png";
  		}
  		else{
  			this.src = "../../assets/images/bap.png";
  		}
  	}
  }
  updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
            this.isExpanded = false;
            if (this.isExpanded){
            	this.src = "../../assets/images/bapWhite.png";
            }
            else{
            	this.src = "../../assets/images/bap.png";
            }
        } else {
            this.isScrolled = false;
            this.isExpanded = false;
            if (!this.notHome){
            	this.src = "../../assets/images/bapWhite.png";
            }
            else{
            	this.src = "../../assets/images/bap.png";
            }
            
        }
    }

}
