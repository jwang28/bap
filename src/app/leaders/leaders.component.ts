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
      "firstName": "Sarah",
      "key": 2,
      "lastName": "Sung",
      "position": "Candidate Master"
    },
    {
      "bio": " ",
      "firstName": "Tyler",
      "key": 3,
      "lastName": "Reede",
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
      "firstName": "Elaine",
      "key": 5,
      "lastName": "Shen",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "May",
      "key": 6,
      "lastName": "Luo",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Oliver",
      "key": 7,
      "lastName": "Cao",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Rohit",
      "key": 8,
      "lastName": "Mohan",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Simon",
      "key": 9,
      "lastName": "Tang",
      "position": "Consulting Workshop Chair"
    },
    {
      "bio": " ",
      "firstName": "Jefferson",
      "key": 10,
      "lastName": "Li",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Nathan",
      "key": 11,
      "lastName": "Li",
      "position": "IBD Workshop"
    },
    {
      "bio": " ",
      "firstName": "Christy",
      "key": 12,
      "lastName": "Chiang",
      "position": "Marketing Chair"
    },
    {
      "bio": "",
      "firstName": "Catherine",
      "key": 13,
      "lastName": "Sze",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "James",
      "key": 14,
      "lastName": "Foo",
      "position": "Marketing"
    },
    {
      "bio": "",
      "firstName": "Kristin",
      "key": 15,
      "lastName": "Xie",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Joey",
      "key": 16,
      "lastName": "Hwang",
      "position": "Mentoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Azam",
      "key": 17,
      "lastName": "Hussain",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Kelly",
      "key": 18,
      "lastName": "Tannady",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Riya",
      "key": 19,
      "lastName": "Mital",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Weilun",
      "key": 20,
      "lastName": "Wang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Sanjana",
      "key": 21,
      "lastName": "Gupta",
      "position": "Publications Chair"
    },
    {
      "bio": " ",
      "firstName": "Aditi",
      "key": 22,
      "lastName": "Ganesan",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Eileen",
      "key": 23,
      "lastName": "Wang",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Yuan",
      "key": 24,
      "lastName": "Yue",
      "position": "Social Chair"
    },
    {
      "bio": " ",
      "firstName": "Suhav",
      "key": 25,
      "lastName": "Toteja",
      "position": "Social"
    },
    {
      "bio": "",
      "firstName": "Timothy",
      "key": 26,
      "lastName": "Zhou",
      "position": "Social"
    },
    {
      "bio": " ",
      "firstName": "Yutong",
      "key": 27,
      "lastName": "Zhang",
      "position": "Speaker Chair"
    },
    {
      "bio": " ",
      "firstName": "Eric",
      "key": 28,
      "lastName": "Zhang",
      "position": "Speaker"
    },
    {
      "bio": "",
      "firstName": "Philip",
      "key": 29,
      "lastName": "Xu",
      "position": "Speaker"
    },
    {
      "bio": " ",
      "firstName": "Phoebe",
      "key": 30,
      "lastName": "Chen",
      "position": "Special Events Chair"
    },
    {
      "bio": "",
      "firstName": "Sienna",
      "key": 31,
      "lastName": "Zhu",
      "position": "Special Events Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Douglas",
      "key": 32,
      "lastName": "Tsang",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Emma",
      "key": 33,
      "lastName": "Tong:):)",
      "position": "Technology Chair"
    },
    {
      "bio": " ",
      "firstName": "Raymond",
      "key": 34,
      "lastName": "Chen :)",
      "position": "Technology"
    },
    {
      "bio": "",
      "firstName": "Matthew",
      "key": 35,
      "lastName": "Zhang",
      "position": "Tutoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Madhav",
      "key": 36,
      "lastName": "Gupta",
      "position": "Tutoring Vice Chair"
    },
    {
      "bio": " ",
      "firstName": "Cameron",
      "key": 37,
      "lastName": "Chu",
      "position": "Tutoring"
    },
    {
      "bio": "",
      "firstName": "Derek",
      "key": 38,
      "lastName": "Huang",
      "position": "Tutoring"
    },
    {
      "bio": "",
      "firstName": "Shushanth",
      "key": 39,
      "lastName": "Gunukula",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Dennis",
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
      "firstName": "Derek ",
      "key": 43,
      "lastName": "Lee",
      "position": "VITA"
    },
    {
      "bio": " ",
      "firstName": "Ariel",
      "key": 44,
      "lastName": "Kau",
      "position": "Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Chris",
      "key": 45,
      "lastName": "Bao",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Kevin",
      "key": 46,
      "lastName": "Cao",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Shreya",
      "key": 47,
      "lastName": "Dua",
      "position": "Workshop"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
