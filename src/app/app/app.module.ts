import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserDashModule } from '../user-dash/user-dash.module';

import { AppComponent } from './app.component';
import { PublicJokesComponent } from '../public-jokes/public-jokes.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({
	imports: [BrowserModule, UserDashModule, AppRoutingModule],
	declarations: [AppComponent, PublicJokesComponent, PageNotFoundComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}
