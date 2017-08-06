import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirect(){
  	window.location.href = 'https://google.com';
  }

}
