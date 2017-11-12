import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { PublishJokeService } from '../user-dash/publish-joke.service';
import { Joke } from '../Joke';
import { PublishJokeResponse } from '../user-dash/Publish-joke-response';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-add-jokes',
	templateUrl: './add-jokes.component.html',
	styleUrls: ['./add-jokes.component.css'],
})
export class AddJokesComponent {
	constructor(
		private publishJokesService: PublishJokeService,
		private location: Location,
		public snackBar: MatSnackBar,
	) {}

	publishJoke(joke: Joke): void {
		this.publishJokesService
			.publishJoke(joke)
			.subscribe((res: PublishJokeResponse) => {
				this.snackBar.open('message', 'action', {
					duration: 2000,
				});
				this.location.back();
			});
	}
}
