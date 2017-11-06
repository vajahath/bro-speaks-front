import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicJokesComponent } from '../public-jokes/public-jokes.component';

const appRoutes: Routes = [
	{ path: '', component: PublicJokesComponent }
	// { path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true })
	],
	declarations: [AppComponent, PublicJokesComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}
