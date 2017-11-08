import { Injectable } from '@angular/core';

import { Joke } from './Joke';
import { JOKES } from './mock-jokes';

@Injectable()
export class JokeService {
	constructor() {}

	getJokes(): Joke[] {
		return JOKES;
	}
}
