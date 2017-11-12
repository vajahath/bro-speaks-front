import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Joke } from '../Joke';
import { JOKES } from '../mock-jokes';

@Injectable()
export class PublicJokesService {
	constructor() {}

	getJokesFeed(): Observable<Joke[]> {
		return of(JOKES);
	}
}
