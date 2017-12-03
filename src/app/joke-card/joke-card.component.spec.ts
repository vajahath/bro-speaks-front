import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCardComponent } from './joke-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

describe('JokeCardComponent', () => {
	let component: JokeCardComponent;
	let fixture: ComponentFixture<JokeCardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [JokeCardComponent],
				imports: [MatButtonModule, MatCardModule],
			}).compileComponents();
		}),
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(JokeCardComponent);
		component = fixture.componentInstance;
		component.joke = {
			author: 'someone',
			jokeText: 'very funny',
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
