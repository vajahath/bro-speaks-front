import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ng-material module imports
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// app modules
import { JokeCardModule } from '../joke-card/joke-card.module';

// app components
import { DashFeedComponent } from './dash-feed.component';

// app services
import { PublishJokeService } from '../user-dash/publish-joke.service';

@NgModule({
	imports: [
		// main
		BrowserModule,
		FormsModule,

		// ng-material
		MatButtonModule,
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatSnackBarModule,

		// app-specific
		JokeCardModule,
	],
	declarations: [DashFeedComponent],
	providers: [PublishJokeService],
})
export class DashFeedModule {}
