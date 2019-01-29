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
    {key: 0, position: 'Candidate Master Chair', firstName: 'Connie', lastName: 'Yu', bio: ' '},
    {key: 1, position: 'Candidate Master Chair', firstName: 'David', lastName: 'Moon', bio: ' '},
    {key: 2, position: 'Candidate Master', firstName: 'Rebecca', lastName: 'Wang', bio: ' '},
    {key: 3, position: 'Candidate Master ', firstName: 'Timothy', lastName: 'Shu', bio: ' '},
    {key: 4, position: 'Community Service Chair', firstName: 'Jery', lastName: 'Tang', bio: ' '},
    {key: 5, position: 'Community Service Chair', firstName: 'Joanne', lastName: 'Jang', bio: ' '},
    {key: 6, position: 'Community Service', firstName: 'Annie', lastName: 'Yang', bio: ' '},
    {key: 7, position: 'Community Service', firstName: 'Avery', lastName: 'Farm', bio: ' '},
    {key: 8, position: 'Community Service', firstName: 'Euihyun', lastName: 'Kim', bio: ' '},
    {key: 9, position: 'Community Service', firstName: 'Jessica', lastName: 'Yang', bio: ' '},
    {key: 10, position: 'Consulting Workshop', firstName: 'Thalia', lastName: 'Lee', bio: ' '},
    {key: 11, position: 'Consulting Workshop', firstName: 'Chaokun', lastName: 'Wangli', bio: ' '},
    {key: 12, position: 'IBD Workshop', firstName: 'Alice', lastName: 'Yang', bio: ' '},
    {key: 13, position: 'IBD Workshop', firstName: 'Teresa', lastName: 'Nguyen', bio: ' '},
    {key: 14, position: 'Marketing Chair', firstName: 'Thalia', lastName: 'Lee', bio: ' '},
    {key: 15, position: 'Marketing', firstName: 'Nancy', lastName: 'Chen', bio: ''},
    {key: 16, position: 'Marketing', firstName: 'Christy', lastName: 'Chang', bio: ' '},
    {key: 17, position: 'Marketing', firstName: 'Simon', lastName: 'Zeng', bio: ''},
    {key: 18, position: 'Mentoring Chair', firstName: 'Kenneth', lastName: 'Yu', bio: ' '},
    {key: 19, position: 'Mentoring Vice Chair', firstName: 'Annette', lastName: 'Kim', bio: ' '},
    {key: 20, position: 'Mentoring', firstName: 'Chris', lastName: 'Bao', bio: ' '},
    {key: 21, position: 'Mentoring', firstName: 'Hannah', lastName: 'Zhang', bio: ' '},
    {key: 22, position: 'Mentoring', firstName: 'Melissa', lastName: 'Zhang', bio: ' '},
    {key: 23, position: 'Publications Chair', firstName: 'Joanne ', lastName: 'Wang', bio: ' '},
    {key: 24, position: 'Publications', firstName: 'Jason', lastName: 'Suh', bio: ' '},
    {key: 25, position: 'Publications', firstName: 'Travis', lastName: 'Liu', bio: ''},
    {key: 26, position: 'Social Chair', firstName: 'Yuni', lastName: 'Sohn', bio: ''},
    {key: 27, position: 'Social', firstName: 'Michelle', lastName: 'Wang', bio: ' '},
    {key: 28, position: 'Social', firstName: 'Sarah', lastName: 'Yang', bio: ''},
    {key: 29, position: 'Speaker Chair', firstName: 'Jimmy', lastName: 'Teng', bio: ' '},
    {key: 30, position: 'Speaker', firstName: 'Kevin', lastName: 'Cao', bio: ' '},
    {key: 31, position: 'Speaker', firstName: 'Yutong', lastName: 'Zhang', bio: ''},
    {key: 32, position: 'Special Events Chair', firstName: 'Caroline', lastName: 'Wang', bio: ' '},
    {key: 33, position: 'Special Events Vice Chair', firstName: 'Nina', lastName: 'Yu', bio: ''},
    {key: 34, position: 'Special Events', firstName: 'Phoebe', lastName: 'Chen', bio: ' '},
    {key: 35, position: 'Technology Chair', firstName: 'Valerie', lastName: 'Wang', bio: ' '},
    {key: 36, position: 'Technology', firstName: 'Alexander', lastName: 'Hsu', bio: ''},
    {key: 37, position: 'Technology', firstName: 'Derek', lastName: 'Huang', bio: ' '},
    {key: 38, position: 'Tutoring Chair', firstName: 'Aakriti', lastName: 'Suri', bio: ''},
    {key: 39, position: 'Tutoring Chair', firstName: 'Edward', lastName: 'Low', bio: ' '},
    {key: 40, position: 'Tutoring Vice Chair', firstName: 'Satyam', lastName: 'Agarwal', bio: ' '},
    {key: 41, position: 'Tutoring', firstName: 'Vincent', lastName: 'Cao', bio: ' '},
    {key: 42, position: 'Tutoring', firstName: 'Saurav', lastName: 'Bose', bio: ' '},
    {key: 43, position: 'Tutoring', firstName: 'Matthew', lastName: 'Zhang', bio: ' '},
    {key: 44, position: 'VITA Chair', firstName: 'Kevin ', lastName: 'Chen', bio: ' '},
    {key: 45, position: 'VITA Chair', firstName: 'Lucy', lastName: 'Lian', bio: ' '},
    {key: 46, position: 'VITA', firstName: 'Grace', lastName: 'Cai', bio: ' '},
    {key: 47, position: 'VITA', firstName: 'Julie', lastName: 'Kim', bio: ' '},
    {key: 48, position: 'VITA', firstName: 'May', lastName: 'Ding', bio: ' '},
    {key: 49, position: 'VITA', firstName: 'Tiger', lastName: 'Wu', bio: ' '},
    {key: 50, position: 'Workshop Chair', firstName: 'Ralles', lastName: 'Liu', bio: ''},
    {key: 51, position: 'Workshop Vice Chair', firstName: 'Jisoo', lastName: 'Kim', bio: ' '},
    {key: 52, position: 'Workshop', firstName: 'Blain', lastName: 'Liang', bio: ''},
    {key: 53, position: 'Workshop', firstName: 'Ethan', lastName: 'Lin', bio: ''},
    
    
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
