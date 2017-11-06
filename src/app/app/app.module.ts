import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PublicJokesComponent } from '../public-jokes/public-jokes.component';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
	imports: [BrowserModule, AppRoutingModule],
	declarations: [
		AppComponent,
		PublicJokesComponent,
		UserDashComponent,
		PageNotFoundComponent
	],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}
