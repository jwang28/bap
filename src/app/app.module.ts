import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import {HttpModule} from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './auth.service';
import { FormsModule } from '@angular/forms';
import { CarouselModule,GrowlModule } from 'primeng/primeng';

export const firebaseConfig = {
  apiKey: "AIzaSyAjHLHK6AE4bmufEk2oCV6578WVUAMdvUo",
  authDomain: "bapwebsite-cbd35.firebaseapp.com",
  databaseURL: "https://bapwebsite-cbd35.firebaseio.com",
  projectId: "bapwebsite-cbd35",
  storageBucket: "bapwebsite-cbd35.appspot.com",
  messagingSenderId: "144461603312"
};


//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AlumniComponent } from './alumni/alumni.component';
import { VitaComponent } from './vita/vita.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    EventsComponent,
    CandidatesComponent,
    LeadersComponent,
    AlumniComponent,
    VitaComponent,
    ContactComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    GrowlModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
