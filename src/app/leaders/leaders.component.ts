import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

HiddenPE: boolean=true;
HiddenSE: boolean=true;
HiddenCS: boolean=true;


  constructor() { }

  ngOnInit() {
  }

}
