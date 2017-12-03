import { Component, OnInit } from '@angular/core';
import { Joke } from '../../Joke';
import { JokeService } from '../../joke.service';

import { PublishJokeService } from '../publish-joke.service';
import { PublishJokeResponse } from '../Publish-joke-response';

import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-dash-feed',
	templateUrl: './dash-feed.component.html',
	styleUrls: ['./dash-feed.component.css'],
})
export class DashFeedComponent implements OnInit {
	constructor(
		private jokeService: JokeService,
		private publishJokeService: PublishJokeService,
		public snackBar: MatSnackBar,
	) {}

	jokes: Joke[];
	newJoke: string;

	getJokes(): void {
		this.jokeService.getJokes().subscribe(jokes => (this.jokes = jokes));
	}

	publishJoke(newJoke: string): void {
		const joke: Joke = {
			jokeText: newJoke,
			author: 'billy',
		};

		this.publishJokeService
			.publishJoke(joke)
			.subscribe((res: PublishJokeResponse) => {
				this.jokes.push(joke);
				this.snackBar.open('message', 'action', {
					duration: 2000,
				});
				this.newJoke = '';
			});
	}

	ngOnInit() {
		this.getJokes();
	}
}
