import { Component, OnInit } from '@angular/core';

import { Joke } from '../Joke';

// app services
import { PublicJokesService } from './public-jokes.service';

@Component({
	selector: 'app-public-jokes',
	templateUrl: './public-jokes.component.html',
	styleUrls: ['./public-jokes.component.css'],
})
export class PublicJokesComponent implements OnInit {
	constructor(private publicJokesService: PublicJokesService) {}

	jokes: Joke[];

	getJokesFeed(): void {
		this.publicJokesService
			.getJokesFeed()
			.subscribe(jokes => (this.jokes = jokes));
	}

	ngOnInit() {
		this.getJokesFeed();
	}
}
