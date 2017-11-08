import { Injectable } from '@angular/core';

import { Joke } from './Joke';
import { JOKES } from './mock-jokes';

@Injectable()
export class JokeService {
	constructor() {}

	getHeroes(): Joke[] {
		return JOKES;
	}
}
