import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicJokesComponent } from '../public-jokes/public-jokes.component';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'jokes', component: PublicJokesComponent },
	{ path: 'u', component: UserDashComponent },
	{ path: '', redirectTo: '/jokes', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, { enableTracing: true })
	],
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
