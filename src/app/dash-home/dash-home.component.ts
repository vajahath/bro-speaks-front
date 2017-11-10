import { Component, OnInit } from '@angular/core';
import { Joke } from '../Joke';
import { JokeService } from '../joke.service';

@Component({
	selector: 'app-dash-home',
	templateUrl: './dash-home.component.html',
	styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
	constructor(private jokeService: JokeService) {}

	jokes: Joke[];

	getJokes(): void {
		this.jokeService.getJokes().subscribe(jokes => (this.jokes = jokes));
	}

	ngOnInit() {
		this.getJokes();
	}
}
