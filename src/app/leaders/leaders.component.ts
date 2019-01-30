import { Component, OnInit } from '@angular/core';
import { CarouselModule,GrowlModule } from 'primeng/primeng';
import { Pipe, PipeTransform } from '@angular/core';
import {MyFilterPipe} from '../myfilter';

@Pipe({
    name: 'myfilter'
})

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

	HiddenPE: boolean=true;
	HiddenSE: boolean=true;
	HiddenCS: boolean=true;
	items: any;
  candidateMasters: Array<any>;

  pipeFilter = '';
  changeFilterData:any[] = [];
  pipeFilterData:any[] =  [];
    
  jsonData = [
    {
      "bio": " ",
      "firstName": "Connie",
      "key": 0,
      "lastName": "Yu",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "David",
      "key": 1,
      "lastName": "Moon",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Rebecca",
      "key": 2,
      "lastName": "Wang",
      "position": "Candidate Master"
    },
    {
      "bio": " ",
      "firstName": "Timothy",
      "key": 3,
      "lastName": "Shu",
      "position": "Candidate Master "
    },
    {
      "bio": " ",
      "firstName": "Jery",
      "key": 4,
      "lastName": "Tang",
      "position": "Community Service Chair"
    },
    {
      "bio": " ",
      "firstName": "Annie",
      "key": 5,
      "lastName": "Yang",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Avery",
      "key": 6,
      "lastName": "Farm",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Euihyun",
      "key": 7,
      "lastName": "Kim",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Jessica",
      "key": 8,
      "lastName": "Yang",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Thalia",
      "key": 9,
      "lastName": "Lee",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Chaokun",
      "key": 10,
      "lastName": "Wangli",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Alice",
      "key": 11,
      "lastName": "Yang",
      "position": "IBD Workshop"
    },
    {
      "bio": " ",
      "firstName": "Teresa",
      "key": 12,
      "lastName": "Nguyen",
      "position": "IBD Workshop"
    },
    {
      "bio": " ",
      "firstName": "Thalia",
      "key": 13,
      "lastName": "Lee",
      "position": "Marketing Chair"
    },
    {
      "bio": "",
      "firstName": "Nancy",
      "key": 14,
      "lastName": "Chen",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Christy",
      "key": 15,
      "lastName": "Chang",
      "position": "Marketing"
    },
    {
      "bio": "",
      "firstName": "Simon",
      "key": 16,
      "lastName": "Zeng",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Kenneth",
      "key": 17,
      "lastName": "Yu",
      "position": "Mentoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Annette",
      "key": 18,
      "lastName": "Kim",
      "position": "Mentoring Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Chris",
      "key": 19,
      "lastName": "Bao",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Hannah",
      "key": 20,
      "lastName": "Zhang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Melissa",
      "key": 21,
      "lastName": "Zhang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Joanne ",
      "key": 22,
      "lastName": "Wang",
      "position": "Publications Chair"
    },
    {
      "bio": " ",
      "firstName": "Jason",
      "key": 23,
      "lastName": "Suh",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Travis",
      "key": 24,
      "lastName": "Liu",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Yuni",
      "key": 25,
      "lastName": "Sohn",
      "position": "Social Chair"
    },
    {
      "bio": " ",
      "firstName": "Michelle",
      "key": 26,
      "lastName": "Wang",
      "position": "Social"
    },
    {
      "bio": "",
      "firstName": "Sarah",
      "key": 27,
      "lastName": "Yang",
      "position": "Social"
    },
    {
      "bio": " ",
      "firstName": "Jimmy",
      "key": 28,
      "lastName": "Teng",
      "position": "Speaker Chair"
    },
    {
      "bio": " ",
      "firstName": "Kevin",
      "key": 29,
      "lastName": "Cao",
      "position": "Speaker"
    },
    {
      "bio": "",
      "firstName": "Yutong",
      "key": 30,
      "lastName": "Zhang",
      "position": "Speaker"
    },
    {
      "bio": " ",
      "firstName": "Caroline",
      "key": 31,
      "lastName": "Wang",
      "position": "Special Events Chair"
    },
    {
      "bio": "",
      "firstName": "Nina",
      "key": 32,
      "lastName": "Yu",
      "position": "Special Events Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Phoebe",
      "key": 33,
      "lastName": "Chen",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Valerie",
      "key": 34,
      "lastName": "Wang",
      "position": "Technology Chair"
    },
    {
      "bio": "",
      "firstName": "Alexander",
      "key": 35,
      "lastName": "Hsu",
      "position": "Technology"
    },
    {
      "bio": " ",
      "firstName": "Derek",
      "key": 36,
      "lastName": "Huang",
      "position": "Technology"
    },
    {
      "bio": "",
      "firstName": "Aakriti",
      "key": 37,
      "lastName": "Suri",
      "position": "Tutoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Edward",
      "key": 38,
      "lastName": "Low",
      "position": "Tutoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Satyam",
      "key": 39,
      "lastName": "Agarwal",
      "position": "Tutoring Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Vincent",
      "key": 40,
      "lastName": "Cao",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Saurav",
      "key": 41,
      "lastName": "Bose",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Matthew",
      "key": 42,
      "lastName": "Zhang",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Kevin ",
      "key": 43,
      "lastName": "Chen",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Lucy",
      "key": 44,
      "lastName": "Lian",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Grace",
      "key": 45,
      "lastName": "Cai",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Julie",
      "key": 46,
      "lastName": "Kim",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "May",
      "key": 47,
      "lastName": "Ding",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Tiger",
      "key": 48,
      "lastName": "Wu",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Jisoo",
      "key": 49,
      "lastName": "Kim",
      "position": "Workshop Vice Chair"
    },
    {
      "bio": "",
      "firstName": "Blain",
      "key": 50,
      "lastName": "Liang",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Ethan",
      "key": 51,
      "lastName": "Lin",
      "position": "Workshop"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
