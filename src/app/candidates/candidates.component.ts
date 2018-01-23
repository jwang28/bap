import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  host: {
    '(window:resize)': 'checkButton($event)'
  }
})
export class CandidatesComponent implements OnInit {
  fullScreen: boolean;

  constructor(private router: Router) { 

  }

  ngOnInit() {
    if (window.innerWidth <= 768){
      this.fullScreen = false;
    }
    else{
      this.fullScreen = true;
    }
  }

  redirect(){
  	/*window.location.href = 'https://goo.gl/forms/Nft2PkKtiKZjh8Yo2';*/
    window.open('https://docs.google.com/document/d/1qb0FcCNd25YYTFp2Nvo5edGXgBFOqt72vnV75XCnBT0/edit');
  }

  toLogin(){
  	this.router.navigateByUrl('/login');
  }

  checkButton(){
    if (window.innerWidth > 768){
      this.fullScreen = true;
    }
    else{
      this.fullScreen=false;
    }
  }
}
