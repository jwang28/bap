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
    {key: 0, position: 'Candidate Master Chair', firstName: 'Annie', lastName: 'Chayanupatkul', bio: 'Annie is a junior studying Finance and Management. She is originally from Bangkok, Thailand. Her interests include photography, playing sports, and exploring new places in the city. During her previous summers, she has worked in private wealth management, technology startup, and venture capital.'},
    {key: 1, position: 'Candidate Master', firstName: 'Alexander', lastName: 'Yu', bio: 'Alex is a Junior studying Finance and Statistics with a minor in Computer Science and Mathematics. He is originally from London, UK, but grew up in Shanghai, China. His interests include basketball, good food and drinks. In his previous summer, he interned in Wealth Management.'},
    {key: 2, position: 'Candidate Master', firstName: 'Joelle', lastName: 'Au', bio: 'Joelle is a junior studying Finance and Computing & Data Science. She\'s from Hong Kong and Singapore. Her interests include dancing, spinning, roller coasters and sushi restaurants. During her previous summers, she has worked in marketing and securities services tax. She hopes to work in investment banking next summer.'},
    {key: 3, position: 'Candidate Master ', firstName: 'Slavi', lastName: 'Arnaudov', bio: 'Slavi Arnaudov is a Junior studying Finance and Statistics with a minor in Chinese Language. He is originally from Sofia, Bulgaria, and lived all over the world before settling down in Los Angeles, California. In his free time, he enjoys hip-hop dancing, Taekwondo, watching Korean dramas and going to brunch with his BAP friends. This summer, he worked in investment banking at The Valence Group and will be joining Evercore M&A next summer.'},
    {key: 4, position: 'Community Service Chair', firstName: 'Grace', lastName: 'Muchtar', bio: 'Grace Muchtar is a Junior studying Finance and Information Systems. She was born and bred in Jakarta, Indonesia. Her interests include Reddit, fantasy books and history. This past summer, she was part of the Girls Who Invest program and worked at Global Atlantic Financial Group in their Investments division. '},
    {key: 5, position: 'Community Service Chair', firstName: 'Natasha', lastName: 'Rajiv', bio: 'Natasha is a Junior studying Data Science and Management, with a minor in Digital Art and Design. She is originally from Singapore, and her interests include baking, graphic design, and working out. She has experience working at a tech startup, a private equity firm, and in strategy consulting. She hopes to pursue consulting in the future.'},
    {key: 6, position: 'Community Service', firstName: 'Blain', lastName: 'Liang', bio: 'Blain is a Sophomore majoring in Finance and Mathematics. He is originally from Holmdel, New Jersey. His interests include tennis, fine dining, and k-pop. He has prior experience working in ad sales finance and mutual funds. He is seeking opportunities in investment banking next summer.'},
    {key: 7, position: 'Community Service', firstName: 'Jery', lastName: 'Tang', bio: 'Jery is a sophomore studying Finance and Business Economics. He is originally from Vancouver, but grew up in Beijing, China. His interests include basketball, badminton, and watching Friends. He is seeking opportunities in investment banking for next summer.'},
    {key: 8, position: 'Community Service', firstName: 'Joanne', lastName: 'Jang', bio: 'Joanne is a sophomore studying finance and computing and data science. She was born and raised in Seoul, Korea. She has career interest in investment banking and likes traveling and watching musicals'},
    {key: 9, position: 'Community Service', firstName: 'Royce', lastName: 'Tjin', bio: 'Royce is a Junior studying finance and data science. He is originally Livingston, NJ. In his free time he enjoys playing soccer, climbing, and overeating. Most recently, he has worked in asset management and he hopes to continue exploring the financial services industry next summer.'},
    {key: 10, position: 'Marketing Chair', firstName: 'Oscar', lastName: 'Xia', bio: 'Growing up on the dark streets of Walnut, California, Oscar likes to spend his time laughing and enjoying the little things in life. This past summer, he worked at HSBC Private Bank. His dream is to open a lobster roll shack.'},
    {key: 11, position: 'Marketing', firstName: 'Alexis', lastName: 'Yu', bio: ''},
    {key: 12, position: 'Marketing', firstName: 'Thalia', lastName: 'Lee', bio: 'Thalia is a Junior concentrating in Finance and Sustainable Business, with a minor in English. She was born and raised on the sunny island of Singapore. In her free time, you can find her with her camera or Kindle, binging Netflix and substituting gym plans with food expeditions. She enjoys exploring new fields and has experience working for a non-profit, a coworking space and an equity crowdfunding platform. She hopes to venture into consulting. '},
    {key: 13, position: 'Marketing', firstName: 'Michael', lastName: 'Li', bio: ''},
    {key: 14, position: 'Mentoring Chair', firstName: 'Jackie', lastName: 'Liu', bio: 'Jackie is a Senior majoring in Finance and Marketing. She was born in China and grew up in Vancouver, Canada. Jackie enjoys watching Korean dramas in her free time, but she is trying to become more active and sign up for ClassPass this semester. During her previous summers, she interned at Chloé, Morgan Stanley and Macquarie. After graduation, she will be joining Macquarie as an investment banking analyst in the Real Estate Group. '},
    {key: 15, position: 'Mentoring', firstName: 'Jennifer', lastName: 'Kim', bio: 'Jennifer is a junior studying Business & Political Economy. She grew up in the Bay Area, and is willing to teach anyone about the geography of this beautiful region. She can be found hiking, reading her Kindle, rewatching Silicon Valley, or scrolling through meme pages. This summer, she\'ll be joining J.P. Morgan Chase in their Global Finance & Business Management Analyst Program. '},
    {key: 16, position: 'Mentoring', firstName: 'Kenneth', lastName: 'Yu', bio: 'Kenneth is a Junior studying Finance and Economics with a minor in French. He lived in Houston, TX all his life until coming to NYU. In his free time, he likes to explore New York\'s restaurants to write Yelp reviews and post on his Foodstagram, play League of Legends, and travel. Last summer, he worked at a tech company, and next summer, he will be joining J.P. Morgan Asset Management on the Equities team.'},
    {key: 17, position: 'Mentoring', firstName: 'Joy', lastName: 'Liu', bio: 'Joy Liu is a junior studying Finance and Economics with a minor in Math. She grew up in the suburbs of Chicago and enjoys running, brunching, and doing the NYT Crossword. Other interests include watching good movies with people that know way more about film than she does and reading Agatha Christie murder mysteries. Over the past summer she worked at Discover Financial Services in Chicago, and next summer, she will be joining Credit Suisse in their Global Markets Division.'},
    {key: 18, position: 'Mentoring', firstName: 'Rebecca', lastName: 'Wang', bio: 'Megan is a Junior studying Finance and Economics. Her hometown is hard to determine, but her current home is Dubai, United Arab Emirates. She is a certified open water diver and likes to go on spontaneous trips. She also likes to eat and make food, go to music festivals and listen to French electro music. She is seeking opportunities in investment banking for next summer.'},
    {key: 19, position: 'Mentoring', firstName: 'Timothy', lastName: 'Shu', bio: 'Tim is born and raised in Taipei, Taiwan. He likes to read, workout, exploring local foods, beautiful views, and hanging out with BAP people. Last year, he worked at the finance and accounting department of Blade, a luxury helicopter company. This past semester he worked at an equity research firm. '},
    {key: 20, position: 'Newsletter Chair', firstName: 'Michael', lastName: 'Wang', bio: 'Michael is a Senior studying Finance and Data Science. Originally from Charlotte, North Carolina, he enjoys pop songwriting, watching scary movies, and playing Pokemon Go in his free time. Michael has worked at Google, Jones Lang LaSalle, and Kobalt Music Group, and spent this past summer interning at Citi.'},
    {key: 21, position: 'Newsletter', firstName: 'Joanne', lastName: 'Wang', bio: 'Patty is a senior studying Finance with a double major in Mathematics. She is from Southern California. This summer she was at J.Crew as an allocation intern and will be continuing in the fall as an intern. Previously, she has worked for Barneys New York and Veronica Beard. In her free time, she likes to play cajon, go running, plan trips, and watch golf.'},
    {key: 22, position: 'Newsletter', firstName: 'Joseph', lastName: 'Lee', bio: ''},
    {key: 23, position: 'Social Chair', firstName: 'Caroline', lastName: 'Wang', bio: 'Caroline is a junior studying Finance and Management with a minor in Japanese. She is originally from Shanghai, China. Her interests include fashion, Pilates, Japanese drama and traveling. This past summer, she interned at Standard Chartered Bank PE department and EY HK advisory department. '},
    {key: 24, position: 'Social', firstName: 'David', lastName: 'Moon', bio: ''},
    {key: 25, position: 'Social', firstName: 'Yuni', lastName: 'Sohn', bio: 'Yuni Sohn is a Junior studying Finance and BS/MS Accounting. She is originally from Seoul, South Korea, but mostly grew up in Singapore. Her interests include Two Dots, dance, and watching Friends. During her previous summers, she has worked in management consulting and at a startup as a summer financial analyst. She hopes to go into accounting next summer.'},
    {key: 26, position: 'Speaker Chair', firstName: 'Angela', lastName: 'Sun', bio: 'Angela is a junior studying Finance and Management with a minor in Food Studies. She is originally from Brooklyn, New York and has grown up in the city her entire life. Her interests include anything related to food and cute dogs. Previously, she worked at a boutique investment bank. This summer, she plans to go into investment banking. '},
    {key: 27, position: 'Speaker', firstName: 'Angela', lastName: 'Zhou', bio: ''},
    {key: 28, position: 'Speaker', firstName: 'Eileen', lastName: 'Wang', bio: ''},
    {key: 29, position: 'Speaker', firstName: 'Jimmy', lastName: 'Teng', bio: ''},
    {key: 30, position: 'Special Events Chair', firstName: 'Sindhu', lastName: 'Immidisetty', bio: ''},
    {key: 31, position: 'Special Events', firstName: 'Cassie', lastName: 'Chan', bio: 'Born and raised in NY (though you\'d never expect it), Cassie is a Junior studying Finance and Data Science. Her interests include cheap eats, roller coasters, and travelling. This past summer, she worked at a Fortune 50 oil and gas company on the commercial trading floor. '},
    {key: 32, position: 'Special Events', firstName: 'Nina', lastName: 'Yu', bio: ''},
    {key: 33, position: 'Technology Chair', firstName: 'Jennifer', lastName: 'Wang', bio: 'Jennifer Wang is a Junior studying Finance and Computer Science. She is originally from Northern California. Her interests include photography, hiking, and playing the flute. In her previous summers, she has interned as a technology consultant at Accenture and an analyst at BBG Ventures.'},
    {key: 34, position: 'Technology', firstName: 'Rachel', lastName: 'Wang', bio: ''},
    {key: 35, position: 'Technology', firstName: 'Eric', lastName: 'He', bio: 'Born in San Jose, California, Eric He is a Junior studying Math and Statistics. He likes surfing the web and walking with friends. Eric has worked as a machine learning intern for a semiconductor startup and as an analyst for a venture capital firm, and hopes to work as a data scientist in the future.'},
    {key: 36, position: 'Tutoring Chair', firstName: 'SiHeng', lastName: 'Yeo', bio: 'SH Yeo is a senior majoring in Finance & Statistics. He was born and raised in Singapore before coming to Stern for college. His interests include sports (running, soccer, triathlon, hiking), drinking, video gaming, and driving tanks. During his previous summers, he worked at Macquarie IB in New York and a Venture Capital Fund in New York City. He hopes to have a lit senior year.'},
    {key: 37, position: 'Tutoring', firstName: 'JJ', lastName: 'Loh', bio: ''},
    {key: 38, position: 'Tutoring', firstName: 'Satyam', lastName: 'Agarwal', bio: ''},
    {key: 39, position: 'VITA Chair', firstName: 'Emily', lastName: 'Shi', bio: 'Emily is a senior studying Finance and Accounting. She is originally from China. She spent the past summer as an audit intern at Deloitte China. '},
    {key: 40, position: 'VITA Chair', firstName: 'Nicco', lastName: 'Liu', bio: ''},
    {key: 41, position: 'VITA', firstName: 'Bonnie', lastName: 'Liu', bio: 'Bonnie Liu is a junior studying BS/MS Accounting and Finance. She is originally from Guangzhou, China but has attended high school in West Chester, Pennsylvania. Her interests include food, food, and food. She also enjoys music(saxophone) and movies. She will be going to EY as an audit intern under Financial Services Organization(FSO) this upcoming summer.'},
    {key: 42, position: 'VITA', firstName: 'David', lastName: 'Youn', bio: ''},
    {key: 43, position: 'VITA', firstName: 'Kali', lastName: 'Na', bio: ''},
    {key: 44, position: 'VITA', firstName: 'Kevin', lastName: 'Chen', bio: ''},
    {key: 45, position: 'Workshop Chair', firstName: 'Lia', lastName: 'Wei', bio: 'Lia is a Senior studying Finance and Statistics. Coming from Singapore, she loves exploring different neighborhoods in the city. Her interests include road tripping, watching Broadway shows and doing hot yoga. This summer, she interned in the Investment Banking Division at Goldman Sachs with the Global Industrials Group and will be returning full-time.'},
    {key: 46, position: 'Workshop', firstName: 'Christian', lastName: 'Ni', bio: ''},
    {key: 47, position: 'Workshop', firstName: 'Jisoo', lastName: 'Kim', bio: ''},
    {key: 48, position: 'Workshop', firstName: 'Vincent', lastName: 'Coghill', bio: ''},
    {key: 48, position: 'IBD Workshop', firstName: 'Aditya', lastName: 'Garg', bio: ''},
    {key: 49, position: 'IBD Workshop', firstName: 'Jennifer', lastName: 'Chan', bio: ''},
    {key: 50, position: 'IBD Workshop', firstName: 'Ralles', lastName: 'Liu', bio: ''},

  ];

  constructor() {
    this.pipeFilterData = this.jsonData;
  }
  ngOnInit() {
  }

}
