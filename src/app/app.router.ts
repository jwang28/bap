import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
	//{ path: '', redirectTo: 'about', pathMatch: 'full'},
	{ path: '', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'services', component: ServicesComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);