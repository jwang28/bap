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
    {key: 3, position: 'Candidate Master ', firstName: 'Tim', lastName: 'Shu', bio: ' '},
    {key: 4, position: 'Community Service Chair', firstName: 'Jery', lastName: 'Tang', bio: ' '},
    {key: 5, position: 'Community Service Chair', firstName: 'Joanne', lastName: 'Jang', bio: ' '},
    {key: 6, position: 'Community Service', firstName: 'Annie', lastName: 'Yang', bio: ' '},
    {key: 7, position: 'Community Service', firstName: 'Gloria', lastName: 'Zheng', bio: ' '},
    {key: 8, position: 'Community Service', firstName: 'Jessica', lastName: 'Yang', bio: ' '},
    {key: 9, position: 'Community Service', firstName: 'Steven', lastName: 'Gong', bio: ' '},
    {key: 10, position: 'Marketing Chair', firstName: 'Thalia', lastName: 'Lee', bio: ' '},
    {key: 11, position: 'Marketing', firstName: 'Alexis', lastName: 'Yu', bio: ''},
    {key: 12, position: 'Marketing', firstName: 'Christy', lastName: 'Chang', bio: ' '},
    {key: 13, position: 'Marketing', firstName: 'Michael', lastName: 'Li', bio: ''},
    {key: 14, position: 'Mentoring Chair', firstName: 'Kenneth', lastName: 'Yu', bio: ' '},
    {key: 15, position: 'Mentoring Vice Chair', firstName: 'Annette', lastName: 'Kim', bio: ' '},
    {key: 16, position: 'Mentoring', firstName: 'Aidan', lastName: 'Lee', bio: ' '},
    {key: 17, position: 'Mentoring', firstName: 'Annie ', lastName: 'Chayanupatkul', bio: ' '},
    {key: 18, position: 'Mentoring', firstName: 'Chaokun', lastName: 'Wangli', bio: ' '},
    {key: 19, position: 'Publications Chair', firstName: 'Joanne ', lastName: 'Wang', bio: ' '},
    {key: 20, position: 'Publications', firstName: 'Cole', lastName: 'Yang', bio: ' '},
    {key: 21, position: 'Publications', firstName: 'Steven ', lastName: 'Li', bio: ''},
    {key: 22, position: 'Social Chair', firstName: 'Yuni', lastName: 'Sohn', bio: ''},
    {key: 23, position: 'Social', firstName: 'Michelle', lastName: 'Wang', bio: ' '},
    {key: 24, position: 'Social', firstName: 'Slavi', lastName: 'Arnaudov', bio: ''},
    {key: 25, position: 'Speaker Chair', firstName: 'Jimmy', lastName: 'Teng', bio: ' '},
    {key: 26, position: 'Speaker', firstName: 'Eileen', lastName: 'Wang', bio: ' '},
    {key: 27, position: 'Speaker', firstName: 'Mike', lastName: 'Zhang', bio: ''},
    {key: 28, position: 'Special Events Chair', firstName: 'Caroline', lastName: 'Wang', bio: ' '},
    {key: 29, position: 'Special Events Vice Chair', firstName: 'Nina', lastName: 'Yu', bio: ''},
    {key: 30, position: 'Special Events', firstName: 'Phoebe', lastName: 'Chen', bio: ' '},
    {key: 31, position: 'Technology Chair', firstName: 'Valerie', lastName: 'Wang', bio: ' '},
    {key: 32, position: 'Technology', firstName: 'Cristina', lastName: 'Llacer', bio: ''},
    {key: 33, position: 'Technology', firstName: 'Michelle ', lastName: 'Tu', bio: ' '},
    {key: 34, position: 'Tutoring Chair', firstName: 'Aakriti', lastName: 'Suri', bio: ''},
    {key: 35, position: 'Tutoring Chair', firstName: 'Edward', lastName: 'Low', bio: ' '},
    {key: 36, position: 'Tutoring Vice Chair', firstName: 'Satyam', lastName: 'Agarwal', bio: ' '},
    {key: 37, position: 'Tutoring', firstName: 'Vincent', lastName: 'Cao', bio: ' '},
    {key: 38, position: 'VITA Chair', firstName: 'Kevin', lastName: 'Chen', bio: ' '},
    {key: 39, position: 'VITA Chair', firstName: 'Lucy', lastName: 'Lian', bio: ' '},
    {key: 40, position: 'VITA', firstName: 'Grace', lastName: 'Cai', bio: ' '},
    {key: 41, position: 'Workshop Chair', firstName: 'Ralles', lastName: 'Liu', bio: ''},
    {key: 42, position: 'Workshop Vice Chair', firstName: 'Jisoo', lastName: 'Kim', bio: ' '},
    {key: 43, position: 'Workshop', firstName: 'Bryan', lastName: 'Wang', bio: ''},
    {key: 44, position: 'Workshop', firstName: 'Jacqueline', lastName: 'Zhu', bio: ''},
    {key: 45, position: 'IBD Workshop', firstName: 'Alice', lastName: 'Yang', bio: ' '},
    {key: 46, position: 'IBD Workshop', firstName: 'Teresa', lastName: 'Nguyen', bio: ' '},
    
  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
