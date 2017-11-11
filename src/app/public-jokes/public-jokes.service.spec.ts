import { TestBed, inject } from '@angular/core/testing';

import { PublicJokesService } from './public-jokes.service';

describe('PublicJokesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PublicJokesService],
		});
	});

	it(
		'should be created',
		inject([PublicJokesService], (service: PublicJokesService) => {
			expect(service).toBeTruthy();
		}),
	);
});
