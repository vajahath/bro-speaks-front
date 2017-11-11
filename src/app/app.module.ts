import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { UserDashModule } from './user-dash/user-dash.module';
import { PublicJokesModule } from './public-jokes/public-jokes.module';

// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// services
import { JokeService } from './joke.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,

		// ng-material
		BrowserAnimationsModule,
		MatToolbarModule,
		MatGridListModule,

		// app-modules
		UserDashModule,
		PublicJokesModule,

		// final-AppRoute
		AppRoutingModule,
	],
	declarations: [AppComponent, PageNotFoundComponent],
	bootstrap: [AppComponent],
	providers: [JokeService],
})
export class AppModule {}
