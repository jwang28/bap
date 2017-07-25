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

  updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
            console.log(this.isScrolled);
            this.src = "../../assets/images/bap.png";
        } else {
            this.isScrolled = false;
            if (!this.notHome){
            	this.src = "../../assets/images/bapWhite.png";
            }
            
        }
    }

}
