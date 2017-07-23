import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routes,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
