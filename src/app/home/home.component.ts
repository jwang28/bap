import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
  	'(window:scroll)': 'execute($event)'
  }
})
export class HomeComponent implements OnInit {
setSpeed: number = 7;
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

  }

}
