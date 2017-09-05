import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AlumniComponent } from './alumni/alumni.component';
import { VitaComponent } from './vita/vita.component';
import { ContactComponent } from './contact/contact.component';
//import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

export const router: Routes = [
	//{ path: '', redirectTo: 'about', pathMatch: 'full'},
	//add in null or random chars path
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'events', component: EventsComponent},
	{ path: 'candidates', component: CandidatesComponent},
	{ path: 'leaders', component: LeadersComponent},
	/*{ path: 'alumni', component: AlumniComponent},*/
	{ path: 'vita', component: VitaComponent},
	{ path: 'contact', component: ContactComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);