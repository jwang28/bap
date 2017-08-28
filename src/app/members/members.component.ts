import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  items: FirebaseListObservable<any>;
  name: any;
  state: string = '';
  msgVal: string='';
  nnum: any;
  member: any;
  netID: any;
  professional_attended: any;
  professional_unattended: any;
  social_attended: any;
  social_unattended: any;
  community_attended: any;
  community_unattended: any;

  hiddenPE: boolean=true;
  hiddenSE: boolean=true;
  hiddenCS: boolean=true;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth,private router: Router) {

    

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
        this.items = db.list('/members', {
          query: {
            orderByChild: 'email',
            equalTo: auth.email
          }
        });
        
        this.netID = auth.email.substr(0,auth.email.indexOf("@"));
        this.member = db.object('/members/' + this.netID);
        console.log("netID is: " + this.netID);

        this.professional_attended = db.list('attendance/' + this.netID + '/professional/attended');
        this.professional_unattended = db.list('attendance/' + this.netID + '/professional/unattended');
        this.social_attended = db.list('attendance/' + this.netID + '/social/attended');
        this.social_unattended = db.list('attendance/' + this.netID + '/social/unattended');
        this.community_attended = db.list('attendance/' + this.netID + '/community/attended');
        this.community_unattended = db.list('attendance/' + this.netID + '/community/unattended');
      }
    });
  }

  logout() {
     this.afAuth.auth.signOut();
     console.log('signed out');
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
