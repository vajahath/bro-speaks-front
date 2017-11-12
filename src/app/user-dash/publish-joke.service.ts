import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PublishJokeResponse } from './Publish-joke-response';

import { Joke } from '../Joke';

@Injectable()
export class PublishJokeService {
	constructor() {}

	publishJoke(joke: Joke): Observable<PublishJokeResponse> {
		return of({
			status: true,
			jokePath: 'root/jokeId',
		});
	}
}
