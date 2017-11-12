import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ng-material module imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// app modules
import { JokeCardModule } from '../joke-card/joke-card.module';
import { PublicJokesRoutingModule } from './public-jokes-routing.module';

// app components
import { PublicJokesComponent } from './public-jokes.component';

// services
import { PublicJokesService } from './public-jokes.service';

@NgModule({
	imports: [
		// main
		CommonModule,

		// ng-modules
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,

		// custom modules
		JokeCardModule,
		PublicJokesRoutingModule,
	],
	declarations: [PublicJokesComponent],
	providers: [PublicJokesService],
	exports: [PublicJokesComponent],
})
export class PublicJokesModule {}
