import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Joke } from './Joke';
import { JOKES } from './mock-jokes';

@Injectable()
export class JokeService {
	constructor() {}

	getJokes(): Observable<Joke[]> {
		return of(JOKES);
	}
}
