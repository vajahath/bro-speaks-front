import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng-material module imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { UserDashModule } from './user-dash/user-dash.module';

// components
import { AppComponent } from './app.component';
import { PublicJokesComponent } from './public-jokes/public-jokes.component';
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
		MatButtonModule,

		// app-modules
		UserDashModule,
		AppRoutingModule
	],
	declarations: [AppComponent, PublicJokesComponent, PageNotFoundComponent],
	bootstrap: [AppComponent],
	providers: [JokeService]
})
export class AppModule {}
