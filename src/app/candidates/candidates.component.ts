import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(){
  	window.location.href = 'https://google.com';
  }

  toLogin(){
  	this.router.navigateByUrl('/login');
  }

}
