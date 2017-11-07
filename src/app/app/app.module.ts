import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { UserDashModule } from '../user-dash/user-dash.module';

import { AppComponent } from './app.component';
import { PublicJokesComponent } from '../public-jokes/public-jokes.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,

		// ng-material
		BrowserAnimationsModule,
		MatToolbarModule,
		MatGridListModule,
		MatButtonModule,

		// app-modules
		UserDashModule,
		AppRoutingModule
	],
	declarations: [AppComponent, PublicJokesComponent, PageNotFoundComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}
