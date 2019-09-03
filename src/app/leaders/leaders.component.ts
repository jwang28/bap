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
      "firstName": "Avery",
      "key": 0,
      "lastName": "Farm",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Melissa",
      "key": 1,
      "lastName": "Zhang",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Charlie",
      "key": 2,
      "lastName": "Liang",
      "position": "Candidate Master"
    },
    {
      "bio": " ",
      "firstName": "Sarah",
      "key": 3,
      "lastName": "Sung",
      "position": "Candidate Master "
    },
    {
      "bio": " ",
      "firstName": "Annie",
      "key": 4,
      "lastName": "Yang",
      "position": "Community Service Chair"
    },
    {
      "bio": " ",
      "firstName": "Olivia",
      "key": 5,
      "lastName": "Fan",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Rebekah",
      "key": 6,
      "lastName": "Wu",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Vivian",
      "key": 7,
      "lastName": "Luo",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Zoey",
      "key": 8,
      "lastName": "Zhou",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Chaokun",
      "key": 9,
      "lastName": "Wangli",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Simon",
      "key": 10,
      "lastName": "Tang",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Ethan",
      "key": 11,
      "lastName": "Lin",
      "position": "IBD Workshop"
    },
    {
      "bio": " ",
      "firstName": "Nathan",
      "key": 12,
      "lastName": "Li",
      "position": "IBD Workshop"
    },
    {
      "bio": " ",
      "firstName": "Christy",
      "key": 13,
      "lastName": "Chiang",
      "position": "Marketing Chair"
    },
    {
      "bio": "",
      "firstName": "Emily",
      "key": 14,
      "lastName": "Yan",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "James",
      "key": 15,
      "lastName": "Foo",
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
      "firstName": "Annette",
      "key": 17,
      "lastName": "Kim",
      "position": "Mentoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Joey",
      "key": 18,
      "lastName": "Hwang",
      "position": "Mentoring Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Helen",
      "key": 19,
      "lastName": "Shim",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Riya",
      "key": 20,
      "lastName": "Mital",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Weilun",
      "key": 21,
      "lastName": "Wang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Sanjana",
      "key": 22,
      "lastName": "Gupta",
      "position": "Publications Chair"
    },
    {
      "bio": " ",
      "firstName": "Aditi",
      "key": 23,
      "lastName": "Ganesan",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Eileen",
      "key": 24,
      "lastName": "Wang",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Michelle",
      "key": 25,
      "lastName": "Wang",
      "position": "Social Chair"
    },
    {
      "bio": " ",
      "firstName": "Sarah",
      "key": 26,
      "lastName": "Yang",
      "position": "Social"
    },
    {
      "bio": "",
      "firstName": "Yuan",
      "key": 27,
      "lastName": "Yue",
      "position": "Social"
    },
    {
      "bio": " ",
      "firstName": "Yutong",
      "key": 28,
      "lastName": "Zhang",
      "position": "Speaker Chair"
    },
    {
      "bio": " ",
      "firstName": "Eric",
      "key": 29,
      "lastName": "Zhang",
      "position": "Speaker"
    },
    {
      "bio": "",
      "firstName": "Philip",
      "key": 30,
      "lastName": "Xu",
      "position": "Speaker"
    },
    {
      "bio": " ",
      "firstName": "Phoebe",
      "key": 31,
      "lastName": "Chen",
      "position": "Special Events Chair"
    },
    {
      "bio": "",
      "firstName": "Sienna",
      "key": 32,
      "lastName": "Zhu",
      "position": "Special Events Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Douglas",
      "key": 33,
      "lastName": "Tsang",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Emma",
      "key": 34,
      "lastName": "Tong",
      "position": "Technology Chair"
    },
    {
      "bio": "",
      "firstName": "Derek",
      "key": 35,
      "lastName": "Huang",
      "position": "Technology"
    },
    {
      "bio": " ",
      "firstName": "Charles",
      "key": 36,
      "lastName": "Zheng",
      "position": "Technology"
    },
    {
      "bio": "",
      "firstName": "Matthew",
      "key": 37,
      "lastName": "Zhang",
      "position": "Tutoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Madhav",
      "key": 38,
      "lastName": "Gupta",
      "position": "Tutoring Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Cameron",
      "key": 39,
      "lastName": "Chu",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Dennis ",
      "key": 40,
      "lastName": "Ding",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Tiger",
      "key": 41,
      "lastName": "Wu",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Emily",
      "key": 42,
      "lastName": "Bai",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Jisoo",
      "key": 43,
      "lastName": "Kim",
      "position": "Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Ariel",
      "key": 44,
      "lastName": "Kau",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Kevin",
      "key": 45,
      "lastName": "Cao",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Sara",
      "key": 46,
      "lastName": "Liu",
      "position": "Workshop"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
