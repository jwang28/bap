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
      "firstName": "Olivia",
      "key": 0,
      "lastName": "Lee",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Suhav",
      "key": 1,
      "lastName": "Toteja",
      "position": "Candidate Master Chair"
    },
    {
      "bio": " ",
      "firstName": "Kristin",
      "key": 2,
      "lastName": "Xie",
      "position": "Candidate Master"
    },
    {
      "bio": " ",
      "firstName": "Azam",
      "key": 3,
      "lastName": "Hussain",
      "position": "Candidate Master "
    },
    {
      "bio": " ",
      "firstName": "Emily",
      "key": 4,
      "lastName": "Zhu",
      "position": "Community Service Chair"
    },
    {
      "bio": " ",
      "firstName": "Michael",
      "key": 5,
      "lastName": "Chen",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Tian",
      "key": 6,
      "lastName": "Zhong",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Grace",
      "key": 7,
      "lastName": "Huang",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Oliver",
      "key": 8,
      "lastName": "Cao",
      "position": "Community Service"
    },
    {
      "bio": " ",
      "firstName": "Jefferson",
      "key": 9,
      "lastName": "Li",
      "position": "Consulting Workshop Chair"
    },
    {
      "bio": " ",
      "firstName": "Raymond",
      "key": 10,
      "lastName": "Chen",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Claire",
      "key": 11,
      "lastName": "Liu",
      "position": "Consulting Workshop"
    },
    {
      "bio": " ",
      "firstName": "Kartik",
      "key": 12,
      "lastName": "Nalamalapu",
      "position": "IBD Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Jeffrey",
      "key": 13,
      "lastName": "Li",
      "position": "IBD Workshop Chair"
    },
    {
      "bio": " ",
      "firstName": "James",
      "key": 14,
      "lastName": "Foo",
      "position": "Marketing Chair"
    },
    {
      "bio": "",
      "firstName": "Catherine",
      "key": 15,
      "lastName": "Sze",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Rachel",
      "key": 16,
      "lastName": "Li",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Athena",
      "key": 17,
      "lastName": "Li",
      "position": "Marketing"
    },
    {
      "bio": " ",
      "firstName": "Riya",
      "key": 18,
      "lastName": "Mital",
      "position": "Mentoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Kelly",
      "key": 19,
      "lastName": "Tannady",
      "position": "Mentoring Vice-Chair"
    },
    {
      "bio": " ",
      "firstName": "Eric",
      "key": 20,
      "lastName": "Zhang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Joey",
      "key": 21,
      "lastName": "Hwang",
      "position": "Mentoring"
    },
    {
      "bio": " ",
      "firstName": "Chris",
      "key": 22,
      "lastName": "Bao",
      "position": "Mentoring"
    },
    {
      "bio": "",
      "firstName": "Sanjana",
      "key": 23,
      "lastName": "Gupta",
      "position": "Publications Chair"
    },
    {
      "bio": "",
      "firstName": "Devangi",
      "key": 24,
      "lastName": "Pandey",
      "position": "Publications"
    },
    {
      "bio": " ",
      "firstName": "Tanav",
      "key": 25,
      "lastName": "Suman",
      "position": "Publications"
    },
    {
      "bio": "",
      "firstName": "Eric",
      "key": 26,
      "lastName": "Lu",
      "position": "Social Chair"
    },
    {
      "bio": " ",
      "firstName": "Yuan",
      "key": 27,
      "lastName": "Yue",
      "position": "Social"
    },
    {
      "bio": " ",
      "firstName": "Timothy",
      "key": 28,
      "lastName": "Zhou",
      "position": "Social"
    },
    {
      "bio": "",
      "firstName": "Philip",
      "key": 29,
      "lastName": "Xu",
      "position": "Speaker Chair"
    },
    {
      "bio": " ",
      "firstName": "Zhen Yu",
      "key": 30,
      "lastName": "Yang",
      "position": "Speaker"
    },
    {
      "bio": "",
      "firstName": "Laura",
      "key": 31,
      "lastName": "Zhang",
      "position": "Speaker"
    },
    {
      "bio": " ",
      "firstName": "Douglas",
      "key": 32,
      "lastName": "Tsang",
      "position": "Special Events Chair"
    },
    {
      "bio": " ",
      "firstName": "Marissa",
      "key": 33,
      "lastName": "Liu",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Eric",
      "key": 34,
      "lastName": "Lee",
      "position": "Special Events"
    },
    {
      "bio": " ",
      "firstName": "Jason",
      "key": 35,
      "lastName": "Liu",
      "position": "Technology Chair :)"
    },
    {
      "bio": " ",
      "firstName": "Corbin",
      "key": 36,
      "lastName": "Ko",
      "position": "Technology :)"
    },
    {
      "bio": "",
      "firstName": "Kathleen",
      "key": 37,
      "lastName": "Zhang",
      "position": "Technology :)"
    },
    {
      "bio": "",
      "firstName": "Cameron",
      "key": 38,
      "lastName": "Chu",
      "position": "Tutoring Chair"
    },
    {
      "bio": " ",
      "firstName": "Derek",
      "key": 39,
      "lastName": "Huang",
      "position": "Tutoring Vice-Chair"
    },
    {
      "bio": " ",
      "firstName": "Anirudh",
      "key": 40,
      "lastName": "Sharma",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "David",
      "key": 41,
      "lastName": "Smoczynski",
      "position": "Tutoring"
    },
    {
      "bio": " ",
      "firstName": "Derek",
      "key": 42,
      "lastName": "Lee",
      "position": "VITA Chair"
    },
    {
      "bio": " ",
      "firstName": "Audrey",
      "key": 43,
      "lastName": "Zang",
      "position": "VITA"
    },
    {
      "bio": "",
      "firstName": "Dhira",
      "key": 44,
      "lastName": "Venkatramani",
      "position": "VITA"
    },
    {
      "bio": "",
      "firstName": "Tony",
      "key": 45,
      "lastName": "Shen",
      "position": "VITA"
    },
    {
      "bio": "",
      "firstName": "Kevin",
      "key": 46,
      "lastName": "Cao",
      "position": "Workshop Chair"
    },
    {
      "bio": "",
      "firstName": "Sarah",
      "key": 47,
      "lastName": "Sung",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Sara",
      "key": 48,
      "lastName": "Liu",
      "position": "Workshop"
    },
    {
      "bio": "",
      "firstName": "Catherine",
      "key": 49,
      "lastName": "Lee",
      "position": "Workshop"
    }
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
